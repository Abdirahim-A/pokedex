
interface pokemonStatsModel {
	base_stat: number;
	pokemon_v2_stat: { name: string };
}

interface pokemonTypesModel {
	pokemon_v2_type: { name: string };
}

interface PokemonInterface {
	name: string;
	id: number;
	pokemon_v2_pokemonstats: pokemonStatsModel[];
	pokemon_v2_pokemontypes: pokemonTypesModel[];
}

export default PokemonInterface;
