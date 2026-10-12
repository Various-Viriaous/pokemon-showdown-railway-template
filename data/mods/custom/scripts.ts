export const Scripts: ModdedBattleScriptsData = {
	gen: 9,

	pokemon: {
		inherit: true,

		getStat(statName, unboosted, unmodified, fastReturn) {
			// Data Instability:
			// Every non-HP stat is either 0 or 650.
			// The value is stored in the datainstability volatile
			// and regenerated each turn by the ability.
			if (
				this.ability === 'datainstability' &&
				statName !== 'hp'
			) {
				const stats = this.volatiles['datainstability']?.stats;
				console.log(`[DEBUG getStat] ${this.name} ${statName}: volatile=${JSON.stringify(stats)}`);

				if (stats && stats[statName] !== undefined) {
					return stats[statName];
				}
			}

			let stat = this.storedStats[statName];

			if (!unboosted) {
				const boost = this.boosts[statName];

				if (boost > 0) {
					const boostTable = [1, 1.5, 2, 2.5, 3, 3.5, 4];
					stat = Math.floor(
						stat * boostTable[Math.min(boost, 6)]
					);
				} else if (boost < 0) {
					const numerators = [100, 66, 50, 40, 33, 28, 25];
					stat = Math.floor(
						stat * numerators[Math.min(-boost, 6)] / 100
					);
				}
			}

			if (!unmodified) {
				if (this.status === 'brn' && statName === 'atk') {
					stat = Math.floor(stat / 2);
				}
			}

			if (fastReturn) return stat;

			return stat;
		},

		calculateStat(statName, boost, modifier, statUser) {
    if (statName === 'hp') throw new Error("Please read `maxhp` directly");

			// Data Instability:
			// Every non-HP stat is either 0 or 650, bypassing boosts/modifiers entirely.
			if (this.ability === 'datainstability') {
				const stats = this.volatiles['datainstability']?.stats;
				console.log(`[DEBUG calculateStat] ${this.name} ${statName}: volatile=${JSON.stringify(stats)}`);

				if (stats && stats[statName] !== undefined) {
					return stats[statName];
				}
			}

			// base stat
			let stat = this.storedStats[statName];

			// Wonder Room swaps defenses before calculating anything else
			if ('wonderroom' in this.battle.field.pseudoWeather) {
				if (statName === 'def') {
					stat = this.storedStats['spd'];
				} else if (statName === 'spd') {
					stat = this.storedStats['def'];
				}
			}

			// stat boosts
			let boosts: SparseBoostsTable = {};
			const boostName = statName as BoostID;
			boosts[boostName] = boost;
			boosts = this.battle.runEvent('ModifyBoost', statUser || this, null, null, boosts);
			boost = boosts[boostName]!;
			const boostTable = [1, 1.5, 2, 2.5, 3, 3.5, 4];
			if (boost > 6) boost = 6;
			if (boost < -6) boost = -6;
			if (boost >= 0) {
				stat = Math.floor(stat * boostTable[boost]);
			} else {
				stat = Math.floor(stat / boostTable[-boost]);
			}

			// stat modifier
			return this.battle.modify(stat, (modifier || 1));
		},
	},
};