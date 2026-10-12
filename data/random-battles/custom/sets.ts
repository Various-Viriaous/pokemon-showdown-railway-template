export const CustomSets: {
	[speciesid: string]: {
		sets: {
			species: string;
			ability: string;
			item: string;
			nature: string;
			moves: string[];
			evs: {[stat: string]: number};
			teraType?: string;
			level?: number;
		}[];
	};
} = {
	kujattacoon: {
		sets: [
			{
				species: "Kujattacoon",
				ability: "Sheer Force",
				item: "Choice Scarf",
				nature: "Adamant",
				evs: {hp: 4, atk: 252, spe: 252},
				teraType: "Fighting",
				moves: ["Wooden Ricochet", "U-turn", "Ice Punch", "Earthquake"],
			},
			{
				species: "Kujattacoon",
				ability: "Sheer Force",
				item: "Choice Band",
				nature: "Jolly",
				evs: {hp: 4, atk: 252, spe: 252},
				teraType: "Steel",
				moves: ["Wooden Ricochet", "U-turn", "Ice Punch", "Wood Hammer"],
			},
			{
				species: "Kujattacoon",
				ability: "Sheer Force",
				item: "Life Orb",
				nature: "Jolly",
				evs: {hp: 4, atk: 252, spe: 252},
				teraType: "Fighting",
				moves: ["Wooden Ricochet", "Rapid Spin", "Ice Punch", "Earthquake"],

			},
		],
	},
	shelitheraze: {
		sets: [
			{
				species: "Shelitheraze",
				ability: "No Guard",
				item: "Power Herb",
				nature: "Quiet",
				evs: {hp: 252, spa: 252, spd: 4},
				teraType: "Cosmic",
				moves: ["Meteor Beam", "Trick Room", "Inferno", "Invisible Slither"],
			},
			{
				species: "Shelitheraze",
				ability: "No Guard",
				item: "Assault Vest",
				nature: "Modest",
				evs: {hp: 4, spa: 252, spd: 252},
				teraType: "Cosmic",
				moves: ["Focus Blast", "Hex", "Inferno", "Invisible Slither"],
			},
			{
				species: "Shelitheraze",
				ability: "No Guard",
				item: "Leftovers",
				nature: "Relaxed",
				evs: {hp: 252, def: 252, spd: 4},
				teraType: "Fighting",
				moves: ["Iron Defense", "Trick Room", "Inferno", "Body Press"],


			},
		],
	},
	mazourene: {
		sets: [
			{
				species: "Mazourene",
				ability: "Shadow Tag",
				item: "Power Herb",
				nature: "Timid",
				evs: {hp: 4, spa: 252, spe: 252},
				teraType: "Fairy",
				moves: ["Meteor Beam", "Moonblast", "Wave of Wriath", "Celestial Ray"],
			},
			{
				species: "Mazourene",
				ability: "Shadow Tag",
				item: "Leftovers",
				nature: "Timid",
				evs: {hp: 4, spa: 252, spe: 252},
				teraType: "Ghost",
				moves: ["Disable", "Encore", "Wave of Wriath", "Nasty Plot"],
			},
			{
				species: "Mazourene",
				ability: "Shadow Tag",
				item: "Choice Scarf",
				nature: "Timid",
				evs: {hp: 4, spa: 252, spe: 252},
				teraType: "Water",
				moves: ["Water Spout", "Wave of Wriath", "Celestial Ray", "Flip Turn"],
			},
			{
				species: "Mazourene",
				ability: "Shadow Tag",
				item: "Leftovers",
				nature: "Timid",
				evs: {hp: 252, spa: 4, spe: 252},
				teraType: "Dark",
				moves: ["Defog", "Encore", "Taunt", "Flip Turn"],
	
			},
		],
	},
	fluflurus: {
		sets: [
			{
				species: "Fluflurus",
				ability: "Fluffy",
				item: "Leftovers",
				nature: "Jolly",
				evs: {hp: 4, atk: 252, spe: 252},
				teraType: "Water",
				moves: ["Tidy Up", "Double-Edge", "Aqua Tail", "First Impression"],
			},
			{
				species: "Fluflurus",
				ability: "Fluffy",
				item: "Assault Vest",
				nature: "Adamant",
				evs: {hp: 160, spd: 252, spe: 96},
				teraType: "Normal",
				moves: ["Double-Edge", "Rapid Spin", "Sucker Punch", "First Impression"],
			},
			{
				species: "Fluflurus",
				ability: "Fluffy",
				item: "Leftovers",
				nature: "Jolly",
				evs: {hp: 252, def: 4, spd: 252},
				teraType: "Ghost",
				moves: ["Toxic", "Wish", "Protect", "Knock Off"],
			},
		],
	},
	najestellar: {
		sets: [
			{
				species: "Najestellar",
				ability: "Interstellar Wings",
				item: "Life Orb",
				nature: "Timid",
				evs: {hp: 4, spa: 252, spe: 252},
				teraType: "Cosmic",
				moves: ["Cosmic Cataclysm", "Hurricane", "Calm Mind", "Vacuum Jet"],
			},
			{
				species: "Najestellar",
				ability: "Magic Bounce",
				item: "Heavy-Duty Boots",
				nature: "Calm",
				evs: {hp: 252, spa: 4, spd: 252},
				teraType: "Steel",
				moves: ["Roost", "Defog", "Tailwind", "Solar Flare"],
			},
			{
				species: "Najestellar",
				ability: "Interstellar Wings",
				item: "Heavy-Duty Boots",
				nature: "Calm",
				evs: {hp: 252, spa: 4, spd: 252},
				teraType: "Steel",
				moves: ["Roost", "Air Slash", "Vacuum Jet", "Plasma Vortex"],
			},
		],
	},

	lizamprage: {
		sets: [
			{
				species: "Lizamprage",
				ability: "Own Tempo",
				item: "Choice Scarf",
				nature: "Adamant",
				evs: {hp: 4, atk: 252, spe: 252},
				teraType: "Dragon",
				moves: ["Outrage", "Wood Hammer", "Earthquake", "Stone Edge"],
			},
			{
				species: "Lizamprage",
				ability: "Own Tempo",
				item: "Choice Band",
				nature: "Jolly",
				evs: {hp: 4, atk: 252, spe: 252},
				teraType: "Steel",
				moves: ["Outrage", "Wood Hammer", "Earthquake", "Heavy Slam"],
			},
			{
				species: "Lizamprage",
				ability: "Own Tempo",
				item: "Leftovers",
				nature: "Adamant",
				evs: {hp: 4, atk: 252, spe: 252},
				teraType: "Steel",
				moves: ["Outrage", "Scale Shot", "Swords Dance", "Earthquake"],
			},
			{

				species: "Lizamprage",
				ability: "Moxie",
				item: "Loaded Dice",
				nature: "Adamant",
				evs: {hp: 4, atk: 252, spe: 252},
				teraType: "Steel",
				moves: ["Scale Shot", "Rock Blast", "Bullet Seed", "Heavy Slam"],
			},
		],
	},
	stealthunder: {
		sets: [
			{
				species: "Stealthunder",
				ability: "Speed Boost",
				item: "Choice Specs",
				nature: "Modest",
				evs: {hp: 4, spa: 252, spe: 252},
				teraType: "Dark",
				moves: ["Volt Switch", "Vacuum Jet", "Electro Ball", "Night Daze"],
			},
			{
				species: "Stealthunder",
				ability: "Speed Boost",
				item: "Leftovers",
				nature: "Modest",
				evs: {hp: 4, spa: 252, spe: 252},
				teraType: "Dragon",
				moves: ["Calm Mind", "Stored Power", "Protect", "Electro Ball"],
			},
			{
				species: "Stealthunder",
				ability: "Electric Surge",
				item: "Choice Specs",
				nature: "Jolly",
				evs: {hp: 4, spa: 252, spe: 252},
				teraType: "Dark",
				moves: ["Volt Switch", "Vacuum Jet", "Rising Voltage", "Night Daze"],
			},
			{

				species: "Stealthunder",
				ability: "Electric Surge",
				item: "Choice Specs",
				nature: "Jolly",
				evs: {hp: 8, spa: 248, spe: 252},
				teraType: "Dark",
				moves: ["Volt Switch", "Vacuum Jet", "Rising Voltage", "Night Daze"],
			},
		],
	},
		cachectron: {
		sets: [
			{
				species: "Cachectron",
				ability: "Data Overflow",
				item: "Life Orb",
				nature: "Jolly",
				evs: {atk: 252, spd: 4, spe: 252},
				teraType: "Fighting",
				moves: ["Cache Crash", "Swords Dance", "Close Combat", "Supercell Slam"],
			},
			{
				species: "Cachectron",
				ability: "Data Overflow",
				item: "Focus Sash",
				nature: "Jolly",
				evs: {atk: 252, spd: 4, spe: 252},
				teraType: "Fighting",
				moves: ["Cache Crash", "Swords Dance", "Close Combat", "Supercell Slam"],
			},
			{
				species: "Cachectron",
				ability: "Technician",
				item: "Life Orb",
				nature: "Jolly",
				evs: {atk: 252, spd: 4, spe: 252},
				teraType: "Steel",
				moves: ["Triple Axle", "Fake Out", "Bullet Punch", "Force Palm"],
			},
		],
	},

		leprosaze: {
		sets: [
			{
				species: "Leprosaze",
				ability: "Data Overflow",
				item: "Life Orb",
				nature: "Jolly",
				evs: {atk: 252, spd: 4, spe: 252},
				teraType: "Fighting",
				moves: ["Cache Crash", "Swords Dance", "Close Combat", "Supercell Slam"],
			},
			{
				species: "Cachectron",
				ability: "Data Overflow",
				item: "Focus Sash",
				nature: "Jolly",
				evs: {atk: 252, spd: 4, spe: 252},
				teraType: "Fighting",
				moves: ["Cache Crash", "Swords Dance", "Close Combat", "Supercell Slam"],
			},
			{
				species: "Cachectron",
				ability: "Technician",
				item: "Life Orb",
				nature: "Jolly",
				evs: {atk: 252, spd: 4, spe: 252},
				teraType: "Steel",
				moves: ["Triple Axle", "Fake Out", "Bullet Punch", "Force Palm"],
			},
		],
	},



};