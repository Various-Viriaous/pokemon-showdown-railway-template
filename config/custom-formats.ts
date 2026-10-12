export const Formats = [
	{
		name: "[Gen 9] The Glob's Secret Lair",
		mod: "custom",
		ruleset: ["Standard NatDex", "!Species Clause", "+Custom", "Adjust Level = 100"],
	},
	{
		name: "[Gen 9] The Glob's Secret Treasure Trove",
		mod: "custom",
		gameType: "doubles",
		ruleset: ["Standard NatDex", "!Species Clause", "+Custom", "Adjust Level = 100"],
	},
	{
		name: "[Gen 9] Yabadaruya's Secret Lair",
		mod: "custom",
		ruleset: ["Standard", "!Species Clause", "+Custom", "Adjust Level = 100"],
		onValidateSet(set) {
			const allowed = [
				"kitzhu", "mutoon", "kujattacoon", "emblett", "volcoalbra", "shelitheraze", "maqua", "mazhaze", "mazourene", "fluflurus", "najestellar", "lizamprage", "stealthunder", "cachectron", "leprosaze", "glaciaber", "toxyed", "toxujia", "fairagon", "missingnorebith", "missingnoorigin", "test", "puffpuff",
			];
			const species = this.dex.species.get(set.species);
			if (!allowed.includes(species.id)) {
				return [`${species.name} is not allowed in this format. Only custom region Pokémon are legal.`];
			}
		},
	},
	{
		name: "[Gen 9] Yabadaruya's Secret Treasure Trove",
		mod: "custom",
		gameType: "doubles",
		ruleset: ["Standard", "!Species Clause", "+Custom", "Adjust Level = 100"],
		onValidateSet(set) {
			const allowed = [
				"kitzhu", "mutoon", "kujattacoon", "emblett", "volcoalbra", "shelitheraze", "maqua", "mazhaze", "mazourene", "fluflurus", "najestellar", "lizamprage", "stealthunder", "cachectron", "leprosaze", "glaciaber", "toxyed", "toxujia", "fairagon", "missingnorebith", "missingnoorigin", "test", "puffpuff",

			];
			const species = this.dex.species.get(set.species);
			if (!allowed.includes(species.id)) {
				return [`${species.name} is not allowed in this format. Only custom region Pokémon are legal.`];
			}
		},
	},
	{
	name: "[Gen 9] Yabadaruya's Random Battle",
	mod: "custom",
	team: "random",
	ruleset: ["Obtainable", "Species Clause", "HP Percentage Mod", "Cancel Mod", "+Custom"],
},

];
