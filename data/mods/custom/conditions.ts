export const Conditions: import('../../../sim/dex-conditions').ConditionDataTable = {
	dataoverflow: {
		name: "Data Overflow",
		noCopy: true,

		onStart(pokemon) {
			this.effectState.recordedTypes = [];
			this.effectState.cachedType = '';
		},

		// Stored types permanently deal 50% damage to Cachectron.
		onSourceModifyDamage(damage, source, target, move) {
			if (!move || move.category === 'Status') return;

			if (this.effectState.recordedTypes?.includes(move.type)) {
				this.debug('Data Overflow: reduced damage from stored type');
				return this.chainModify(0.5);
			}
		},

		// ANY move of a permanently stored type gets 2x power.
		onBasePower(basePower, pokemon, target, move) {
			if (!move || move.category === 'Status') return;

			if (this.effectState.recordedTypes?.includes(move.type)) {
				this.debug('Data Overflow: 2x power from stored type');
				return this.chainModify(2);
			}
		},
	},

	
	watched: {
		name: "Watched",
		noCopy: true,

		onStart(target, source) {
			this.add(
				'-start',
				target,
				'Watched',
				'[from] ability: All Eyes on You'
			);
		},

		onEnd(target) {
			this.add(
				'-end',
				target,
				'Watched',
				'[silent]'
			);
		},
	},
};