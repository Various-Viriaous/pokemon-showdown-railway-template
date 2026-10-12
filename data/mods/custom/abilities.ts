export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
		dataoverflow: {
	name: "Data Overflow",
	rating: 4.5,

	shortDesc: "Records types of moves that hit. Recorded types do 50% to it, 2x power for its moves of those types.",

	onStart(pokemon) {
		pokemon.addVolatile('dataoverflow');
	},

	onDamagingHit(damage, target, source, move) {
		if (!move || move.category === 'Status') return;

		const cache = target.volatiles['dataoverflow'];

		if (!cache) return;

		// Permanently remember this type.
		if (!cache.recordedTypes.includes(move.type)) {
			cache.recordedTypes.push(move.type);

			this.add(
				'-activate',
				target,
				'ability: Data Overflow',
				move.type
			);
		}

		// The most recently received move determines Cache Crash's type.
		cache.cachedType = move.type;
	},
},
missingability: {
	name: "MissingAbility",
	rating: 5,
	shortDesc: "With MissingData, MissingNo recalls its past. Begins immune to all types, losing immunity to two types each turn.",

	onSwitchIn(pokemon) {
		if (
			pokemon.item !== 'missingdata' ||
			pokemon.species.id !== 'missingnorebirth'
		) return;

		// Slot 0 = MissingAbility.
		pokemon.formeChange(
			'MissingNo-Origin',
			this.effect,
			true,
			'0'
		);

		// FormeChange resets the ability state, so initialize
		// Data Protection AFTER the transformation.
		pokemon.abilityState.protectedTypes = [
			'Normal',
			'Fire',
			'Water',
			'Electric',
			'Grass',
			'Ice',
			'Fighting',
			'Poison',
			'Ground',
			'Flying',
			'Psychic',
			'Bug',
			'Rock',
			'Ghost',
			'Dragon',
			'Dark',
			'Steel',
			'Fairy',
			'Cosmic',
		];

		pokemon.abilityState.turns = 0;

		this.add(
			'-activate',
			pokemon,
			'ability: MissingAbility'
		);
	},

	onResidual(pokemon) {
		if (
			pokemon.species.id !== 'missingnoorigin' ||
			pokemon.item !== 'missingdata'
		) return;

		const protectedTypes =
			this.effectState.protectedTypes as string[] | undefined;

		if (!protectedTypes || protectedTypes.length === 0) return;

		this.effectState.turns = (this.effectState.turns || 0) + 1;

		const turn = this.effectState.turns;

		if (turn === 3) {
			this.add(
				'-message',
				"MissingNo's Data Protection is deteriorating..."
			);
		}

		if (turn === 5) {
			this.add(
				'-message',
				"MissingNo's Data Protection is crumbling..."
			);
		}

		if (turn === 7) {
			this.add(
				'-message',
				"MissingNo's Data Protection is collapsing..."
			);
		}

		if (turn === 9) {
			this.add(
				'-message',
				"MissingNo's Data Protection has failed!"
			);
		}

		const lostTypes: string[] = [];

		for (let i = 0; i < 2 && protectedTypes.length; i++) {
			const index = this.random(protectedTypes.length);
			lostTypes.push(protectedTypes[index]);
			protectedTypes.splice(index, 1);
		}

		if (lostTypes.length) {
			this.add(
				'-message',
				`MissingNo's Data Protection lost access to ${lostTypes.join(' and ')}!`
			);
		}
	},

	onTryHit(target, source, move) {
		if (
			target.item !== 'missingdata' ||
			target.species.id !== 'missingnoorigin' ||
			move.category === 'Status' ||
			target === source
		) return;

		const protectedTypes =
			this.effectState.protectedTypes as string[] | undefined;

		if (protectedTypes?.includes(move.type)) {
			this.add(
				'-immune',
				target,
				'[from] ability: MissingAbility'
			);
			return null;
		}
	},
},

angelicwing: {
	name: "Angelic Wing",
	rating: 3,
	shortDesc: "Survives move that would otherwise kill on 1 HP once, immune to that move's type.",

	onDamage(damage, target, source, effect) {
		if (
			this.effectState.used ||
			target.hp <= 1 ||
			damage < target.hp ||
			!effect ||
			effect.effectType !== 'Move'
		) return;

		this.effectState.used = true;
		this.effectState.immuneType = effect.type;

		this.add(
			'-activate',
			target,
			'ability: Angelic Wing'
		);

		this.add(
			'-message',
			`Angelic Wing protected MissingNo from ${effect.type}-type damage!`
		);

		return target.hp - 1;
	},

	onTryHit(target, source, move) {
		if (
			target === source ||
			move.category === 'Status' ||
			this.effectState.immuneType !== move.type
		) return;

		this.add(
			'-immune',
			target,
			'[from] ability: Angelic Wing'
		);

		return null;
	},
},

datainstability: {
	name: "Data Instability",
	rating: 4,

	shortDesc: "With MissingData, MissingNo recalls its past. Each turn, stats have a 2/3 chance to be 850 or 0.",

	onSwitchIn(pokemon) {
		if (
			pokemon.item !== 'missingdata' ||
			pokemon.species.id !== 'missingnorebirth'
		) return;

		pokemon.formeChange(
			'MissingNo-Origin',
			this.effect,
			true,
			'1'
		);

		// Make absolutely sure the ability is Data Instability
		pokemon.setAbility('datainstability', pokemon, this.effect, true);

		pokemon.addVolatile('datainstability');

		pokemon.volatiles['datainstability'].stats = {
			atk: this.randomChance(2, 3) ? 850 : 0,
			def: this.randomChance(2, 3) ? 850 : 0,
			spa: this.randomChance(2, 3) ? 850 : 0,
			spd: this.randomChance(2, 3) ? 850 : 0,
			spe: this.randomChance(2, 3) ? 850 : 0,
		};

		this.add(
			'-activate',
			pokemon,
			'ability: Data Instability'
		);
	},

	onResidual(pokemon) {
	console.log(`[DEBUG onResidual] species=${pokemon.species.id} item=${pokemon.item} ability=${pokemon.ability}`);

		if (
			pokemon.species.id !== 'missingnoorigin' ||
			pokemon.item !== 'missingdata'
		) return;

		const volatile = pokemon.volatiles['datainstability'];
		if (!volatile) return;

		volatile.stats = {
			atk: this.randomChance(2, 3) ? 850 : 0,
			def: this.randomChance(2, 3) ? 850 : 0,
			spa: this.randomChance(2, 3) ? 850 : 0,
			spd: this.randomChance(2, 3) ? 850 : 0,
			spe: this.randomChance(2, 3) ? 850 : 0,
		};

		this.add(
			'-activate',
			pokemon,
			'ability: Data Instability'
		);
	},
},
fangofwinter: {
	name: "Fang of Winter",
	rating: 5,
	shortDesc: "Summons snow on switch-in, immune to all other weather. Priority while snow is active.",

	onStart(pokemon) {
		this.field.setWeather('snowscape');
	},

	onImmunity(type, pokemon) {
		if (type === 'sandstorm' || type === 'hail') return false;
	},

	onModifyPriority(priority, pokemon, target, move) {
		if (this.field.isWeather('snowscape')) {
			return priority + 1;
		}
	},
},
pawpads: {
	name: "Paw Pads",
	rating: 3,

	shortDesc: "This Pokemon is unaffected by entry hazards.",

	// Stealth Rock, Spikes, and G-Max Steelsurge deal no damage.
	onDamage(damage, target, source, effect) {
		if (
			effect &&
			['stealthrock', 'spikes', 'gmaxsteelsurge'].includes(effect.id)
		) {
			return false;s
		}
	},

	// Toxic Spikes cannot poison this Pokemon.
	onSetStatus(status, target, source, effect) {
		if (effect && effect.id === 'toxicspikes') {
			return false;
		}
	},

	// Sticky Web cannot lower this Pokemon's Speed.
	onTryBoost(boost, target, source, effect) {
		if (effect && effect.id === 'stickyweb' && boost.spe && boost.spe < 0) {
			return null;
		}
	},
},
	alleyesonyou: {
		name: "All Eyes on You",
		shortDesc: "Foe is trapped, status do 1/8 extra each turn and hit normally immune pokemon.",
		rating: 5,
		onFoeNegateImmunity(pokemon, type) {
	if (type === 'Electric') return false;
},

		// Trap opposing Pokemon while Toxyed is active.
		onFoeTrapPokemon(pokemon) {
			const source = this.effectState.target;

			if (!source || !source.isActive) return;

			if (pokemon.isAdjacent(source)) {
				pokemon.tryTrap(true);
			}
		},

		// Lets the battle UI know that this Pokemon is being watched.
		onStart(pokemon) {
			for (const foe of pokemon.foes()) {
				foe.addVolatile('watched', pokemon);
			}
		},

		// Put newly switched-in opposing Pokemon under Toxyed's gaze.
		onAnySwitchIn(pokemon) {
			for (const active of this.getAllActive()) {
				if (active === pokemon) continue;
				if (!active.isActive) continue;
				if (!active.hasAbility('alleyesonyou')) continue;

				pokemon.addVolatile('watched', active);
			}
		},

		// Remove Watched from opponents when Toxyed leaves.
		onEnd(pokemon) {
			for (const foe of pokemon.foes()) {
				foe.removeVolatile('watched');
			}
		},

		// Every statused opposing Pokemon loses 1/8 HP each turn.
		onResidual(pokemon) {
			for (const foe of pokemon.foes()) {
				if (foe.status) {
					this.damage(Math.max(1, Math.floor(foe.maxhp / 8)), foe);
				}
			}
		},

		flags: {},
		num: -79,
	},
	terminalvenom: {
	name: "Terminal Venom",
	shortDesc: "Badly poisons the user on switch-in. Poison-type moves get STAB. Hello nathanial yap.",
	rating: 3,

	onStart(pokemon) {
		pokemon.setStatus('tox', pokemon, this.effect, true);
	},

	onModifySTAB(stab, source, target, move) {
		if (move.type === 'Poison') {
			return 1.5;
		}
		return stab;
	},
},
	feyfury: {
	name: "Fey Fury",
	shortDesc: "Neutral-effectiveness moves deal 1.5x damage.",
	onModifyDamage(damage, source, target, move) {
		if (target.getMoveHitData(move).typeMod === 0) {
			this.debug('Neutral Boost');
			return this.chainModify(1.5);
		}
	},
	flags: {},
	rating: 4,

},
interstellarwings: {
	name: "Interstellar Wings",
	shortDesc: "Cosmic moves deal 1.5x damage while HP is above 50%.",

	onBasePower(basePower, attacker, defender, move) {
		if (move.type === 'Cosmic' && attacker.hp > attacker.maxhp / 2) {
			return this.chainModify(1.5);
		}
	},

	flags: {},
},
rampage: {
	name: "Rampage",
	shortDesc: "Raises Attack by 1 stage when HP drops to 50% or less.",

	onHPLowering(pokemon) {
		if (pokemon.hp <= pokemon.maxhp / 2 && !pokemon.volatiles['desperation']) {
			pokemon.addVolatile('desperation');
			this.boost({atk: 1}, pokemon);
		}
	},

	flags: {},
},

};