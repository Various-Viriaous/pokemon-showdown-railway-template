import { RandomTeams } from "../gen9/teams";
import { CustomSets } from "./sets";

export class RandomYabTeams extends RandomTeams {
	override getTeam(options?: PlayerOptions | null): PokemonSet[] {
		const pool = Object.keys(CustomSets);
		const team: PokemonSet[] = [];

		while (team.length < 6 && pool.length) {
			// pick a species without replacement, then one of its sets at random
			const id = pool.splice(this.random(pool.length), 1)[0];
			const sets = CustomSets[id].sets;
			const chosen = sets[this.random(sets.length)];

			const species = this.dex.species.get(chosen.species);
			if (!species.exists) throw new Error(`Custom random sets: unknown species "${chosen.species}"`);
			if (!this.dex.abilities.get(chosen.ability).exists) {
				throw new Error(`Custom random sets: unknown ability "${chosen.ability}" on ${species.name}`);
			}
			if (!this.dex.items.get(chosen.item).exists) {
				throw new Error(`Custom random sets: unknown item "${chosen.item}" on ${species.name}`);
			}
			for (const move of chosen.moves) {
				if (!this.dex.moves.get(move).exists) {
					throw new Error(`Custom random sets: unknown move "${move}" on ${species.name}`);
				}
			}

			team.push({
				name: species.baseSpecies,
				species: species.name,
				item: chosen.item,
				ability: chosen.ability,
				moves: chosen.moves,
				nature: chosen.nature,
				gender: species.gender || (this.random(2) ? 'M' : 'F'),
				evs: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0, ...chosen.evs},
				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
				level: chosen.level || 100,
				shiny: false,
				teraType: chosen.teraType || species.types[0],
			});
		}
		return team;
	}
}

export default RandomYabTeams;