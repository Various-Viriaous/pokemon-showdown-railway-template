export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	woodenricochet: {
		num: -1,
		accuracy: 95,
		basePower: 110,
		category: "Physical",
		name: "Wooden Ricochet",
		pp: 10,
		type: "Fighting",
		gen: 9,
		flags: { contact: 1, protect: 1, mirror: 1 },
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			return typeMod + this.dex.getEffectiveness('Grass', target);
		},
		shortDesc: "Grass+Fighting damage. 10% chance to confuse.",
		isNonstandard: "Custom",
	},
	invisibleslither: {
		num: -2,
		accuracy: 95,
		basePower: 110,
		category: "Special",
		name: "Invisible Slither",
		pp: 10,
		type: "Rock",
		gen: 9,
		flags: { protect: 1, mirror: 1 },
		secondary: {
			chance: 10,
			status: 'brn',
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			return typeMod + this.dex.getEffectiveness('Fire', target);
		},
		shortDesc: "Fire+Rock damage. 10% chance to burn.",
		isNonstandard: "Custom",
	},
	waveofwriath: {
		num: -3,
		accuracy: 95,
		basePower: 110,
		category: "Special",
		name: "Wave of Wriath",
		pp: 10,
		type: "Ghost",
		gen: 9,
		flags: { protect: 1, mirror: 1 },
		secondary: {
			chance: 10,
			status: 'par',
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			return typeMod + this.dex.getEffectiveness('Water', target);
		},
		shortDesc: "Water+Ghost damage. 10% chance to paralyze.",
		isNonstandard: "Custom",
	},

		vacuumjet: {
	num: -4,
	accuracy: 100,
	basePower: 70,
	category: "Special",
	name: "Vacuum Jet",
	pp: 5,
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1, mirror: 1},
	priority: 1,
	onTry(source, target) {
		if (target.hasType("Cosmic")) {
			this.add('-immune', target, '[from] move: Vacuum Jet');
			return null;
		}
	},
	shortDesc: "+1 Priority. Has no effect on Cosmic types.",
	isNonstandard: "Custom",
	},
	
		starshot: {
	num: -5,
	accuracy: 100,
	basePower: 45,
	category: "Special",
	name: "Star Shot",
	pp: 15,
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1, mirror: 1},
	multihit: 2,
	shortDesc: "Hits twice.",
	isNonstandard: "Custom",
	},
	
	
		solarflare: {
	num: -6,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	name: "Solar Flare",
	pp: 20,
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1, mirror: 1},
	secondary: {
			chance: 30,
			status: 'brn',
	},
	shortDesc: "30% chance to burn.",
	isNonstandard: "Custom",
	},
		quasar: {
	num: -7,
	accuracy: 100,
	basePower: 85,
	category: "Special",
	name: "Quasar",
	pp: 20,
	target: "allAdjacentFoes", 
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1, mirror: 1},
	secondary: {
			chance: 10,
			volatileStatus: 'confusion', 
	},
	shortDesc: "10% chance to confuse.",
	isNonstandard: "Custom",
	
	},
		starcleave: {
	num: -8,
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	name: "Star Cleave",
	pp: 15,
	type: "Cosmic",
	gen: 9,
	flags: {contact: 1, protect: 1, mirror: 1},
	critRatio: 2,
	shortDesc: "High critical hit ratio.",
	isNonstandard: "Custom",
},

		collidinggalaxies: {
	num: -9,
	accuracy: 90,
	basePower: 95,
	category: "Physical",
	name: "Colliding Galaxies",
	pp: 20,
	target: "allAdjacentFoes", 
	type: "Cosmic",
	gen: 9,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: {
			chance: 20,
			volatileStatus: 'flinch',
	},
	shortDesc: "20% chance to flinch.",
	isNonstandard: "Custom",
},
		redshift: {
	num: -10,
	accuracy: 100,
	basePower: 70,
	category: "Special",
	name: "Red Shift",
	pp: 15,
	type: "Cosmic",
	gen: 9,
	flags: {contact: 1, protect: 1, mirror: 1},

	onModifyDamage(damage, source, target, move) {
		const species = this.dex.species.get(target.species);
		if (species.color === "Red") {
			return this.chainModify(2.5);
		}
	},

	shortDesc: "2.5x power against Red Pokémon.",
	isNonstandard: "Custom",
	},
		gravitywell: {
	num: -11,
	accuracy: 100,
	basePower: 65,
	category: "Physical",
	name: "Gravity Well",
	pp: 10,
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1, mirror: 1},

	onBasePower(basePower, source, target, move) {
		if (this.field.getPseudoWeather('gravity')) {
			return this.chainModify(3);
		}
	},

	shortDesc: "Power is tripled during Gravity.",
	isNonstandard: "Custom",
	},
		plasmavortex: {
		num: -12,
		accuracy: 95,
		basePower: 100,
		category: "Special",
		name: "Plasma Vortex",
		pp: 10,
		type: "Cosmic",
		gen: 9,
		flags: { contact: 1, protect: 1, mirror: 1 },
		secondary: {
			chance: 10,
			status: 'par',
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			return typeMod + this.dex.getEffectiveness('Electric', target);
		},
		shortDesc: "Cosmic+Electric damage. 10% chance to paralyze.",
		isNonstandard: "Custom",
	},
		collosuscrush: {
	num: -13,
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	name: "Collosus Crush",
	pp: 30,
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1, mirror: 1},

	onBasePower(basePower, source, target, move) {
		const height = this.dex.species.get(target.species).heightm;
		if (height < 0.5) return 40;

		return Math.min(200, 40 + Math.floor(height / 0.5) * 20);
	},

	shortDesc: "Power increases with the target's height.",
	isNonstandard: "Custom",
	},
		supernova: {
	num: -14,
	accuracy: 100,
	basePower: 250,
	category: "Physical",
	name: "Supernova",
	pp: 5,
	target: "allAdjacentFoes", 
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1},

	self: {
	onHit(source) {
		this.field.addPseudoWeather('cosmicboost');
		source.faint();
	},
},

	shortDesc: "User faints. Cosmic moves deal 1.5x damage for the rest of the battle.",
	isNonstandard: "Custom",
	},
		eventhorizon: {
	num: -15,
	accuracy: 100,
	basePower: 250,
	category: "Special",
	name: "Event Horizon",
	pp: 5,
	target: "allAdjacentFoes", 
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1},

	self: {
	onHit(source) {
		this.field.addPseudoWeather('cosmicnull');
		source.faint();
	},
},
	shortDesc: "User faints. Cosmic moves deal no damage for the rest of the battle.",
	isNonstandard: "Custom",
	},

		cosmiccataclysm: {
	num: -16,
	accuracy: 80,
	basePower: 120,
	category: "Special",
	name: "Cosmic Cataclysm",
	pp: 10,
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1},
	secondary: {
		chance: 10,
		boosts: {
			atk: -1,
			spa: -1,
		},
	},

	shortDesc: "10% chance to lower both target's attacking stats.",
	isNonstandard: "Custom",
	},
cachecrash: {
	num: -17,
	accuracy: 100,
	basePower: 90,
	category: "Physical",
	name: "Cache Crash",
	pp: 5,
	priority: 0,

	flags: {
		protect: 1,
	},

	// Cache Crash becomes the type of the most recent
	// damaging move that hit Cachectron.
	onModifyType(move, pokemon) {
		const cache = pokemon.volatiles['dataoverflow'];

		if (cache?.cachedType) {
			move.type = cache.cachedType;
		}
	},

	type: "Electric",
	target: "normal",
	gen: 9,
	shortDesc: "Type becomes the type most recently cached by Data Overflow.",
},
cryopyroclaw: {
	num: -18,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	name: "Cryopyro Claw",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1, contact: 1},
	onHit(target, source, move) {
		const roll = this.random(4);
		if (roll === 0) {
			target.trySetStatus('brn', source, move);
		} else if (roll === 1) {
			target.trySetStatus('frz', source, move);
		}
	},
	type: "Fire",
	target: "normal",
	gen: 9,
	shortDesc: "25% chance to brn, 25% chance to freeze.",

},

frostbitefang: {
	num: -19,
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	name: "Frostbite Fang",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1, contact: 1},
	secondary: null,
	onHit(target, source, move) {
		const roll = this.random(4);
		if (roll === 0) {
			target.addVolatile('flinch', source, move);
		} else if (roll === 1) {
			target.addVolatile('confusion', source, move);
		}
	},
	type: "Dark",
	target: "normal",
	gen: 9,
	shortDesc: "25% chance to flinch, 25% chance to confuse.",

},
toxicexsanguination: {
		num: -20, // Custom move ID
		accuracy: 100,
		basePower: 80, // Default baseline power
		shortDesc: "More power and recoil the higher user's health is.",
		category: 'Physical',
		name: "Toxic Exsanguination",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		// Dynamic Base Power based on your new HP brackets
		basePowerCallback(pokemon, target, move) {
			const hpPercent = (pokemon.hp / pokemon.maxhp) * 100;
			if (hpPercent > 99) return 200; // Perfect health
			if (hpPercent >= 65) return 150; // 65% to 99%
			if (hpPercent >= 40) return 120; // 40% to 64%
			if (hpPercent >= 20) return 110; // 20% to 39%
			if (hpPercent >= 10) return 100; // 10% to 19%
			return 80; // Less than 10%
		},
		// Recoil logic matching your new HP brackets
		onAfterMoveSecondarySelf(pokemon, target, move) {
			const hpPercent = (pokemon.hp / pokemon.maxhp) * 100;
			let recoilPercent = 0;

			if (hpPercent > 99) recoilPercent = 1.0;     // 100% of max health
			else if (hpPercent >= 65) recoilPercent = 0.50; // 50% of max health
			else if (hpPercent >= 40) recoilPercent = 0.33; // 33% of max health
			else if (hpPercent >= 20) recoilPercent = 0.20; // 20% of max health
			else if (hpPercent >= 10) recoilPercent = 0.10; // 10% of max health
			else recoilPercent = 0.0;                       // 0% of max health

			if (recoilPercent > 0) {
				const damage = Math.round(pokemon.maxhp * recoilPercent);
				this.damage(damage, pokemon, pokemon, move);
				this.add('-message', `${pokemon.name} violently purged its own life-sustaining poison!`);
			}
		},
		secondary: null,
		target: 'normal',
		type: 'Poison',
	},
	celestialray: {
	num: -21,
	accuracy: 85,
	basePower: 110,
	category: "Special",
	name: "Celestial Ray",
	pp: 20,
	target: "allAdjacentFoes", 
	type: "Cosmic",
	gen: 9,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: {
			chance: 10,
			status: 'slp',
	},
	shortDesc: "Hits all adjacent foes. 10% chance to inflict sleep.",
	isNonstandard: "Custom",
},

	meteorite: {
	num: -22,
	accuracy: 100,
	basePower: 55,
	category: "Physical",
	name: "Meteorite",
	pp: 20,
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1, mirror: 1},
	
	secondary: {
			chance: 50,
			status: 'brn',
	},
	onModifyMove(move, pokemon) {

            if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) {
                move.category = 'Special';
            } else {
                move.category = 'Physical';
            }
        },
	shortDesc: "50% chance to burn. Category changes to higher attacking stat.",
	isNonstandard: "Custom",
	},
	meteoroid: {
	num: -23,
	accuracy: 100,
	basePower: 55,
	category: "Physical",
	name: "Meteoroid",
	pp: 20,
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1, mirror: 1},
	secondary: {
			chance: 40,
			status: 'frz',
	},
	onModifyMove(move, pokemon) {

            if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) {
                move.category = 'Special';
            } else {
                move.category = 'Physical';
            }
        },
	shortDesc: "40% chance to freeze. Category changes to higher attacking stat.",
	isNonstandard: "Custom",
	},
	meteor: {
	num: -24,
	accuracy: 100,
	basePower: 55,
	category: "Physical",
	name: "Meteor",
	pp: 20,
	type: "Cosmic",
	gen: 9,
	flags: {protect: 1, mirror: 1},
	secondary: {
			chance: 50,
			status: 'par',
	},
	onModifyMove(move, pokemon) {

            if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) {
                move.category = 'Special';
            } else {
                move.category = 'Physical';
            }
        },
	shortDesc: "50% chance to paralyze. Category changes to higher attacking stat.",
	isNonstandard: "Custom",
	},
	astroidbelt: {
	num: -25,
	accuracy: 100,
	basePower: 30,
	category: "Physical",
	name: "Astroid Belt",
	pp: 20,
	target: "normal", 
	type: "Cosmic",
	gen: 9,
	multihit: [2, 5],
	flags: {protect: 1, mirror: 1},
	shortDesc: "Hits 2-5 times.",
	isNonstandard: "Custom",
	
	},
	astronomy: {
	num: -26,
	shortDesc: "Picks a random cosmic type move.",
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Astronomy",
	pp: 10,
	priority: 0,
	flags: {failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failmimic: 1, failinstruct: 1},
	onHit(pokemon) {
		const moves = this.dex.moves.all().filter(move => (
			(!move.isNonstandard || move.isNonstandard === 'Unobtainable' || move.isNonstandard === 'Custom') &&
			move.type === 'Cosmic'
		));
		let randomMove = '';
		if (moves.length) {
			moves.sort((a, b) => a.num - b.num);
			randomMove = this.sample(moves).id;
		}
		if (!randomMove) return false;
		this.actions.useMove(randomMove, pokemon);
	},
	callsMove: true,
	target: "self",
	type: "Cosmic",
},




};