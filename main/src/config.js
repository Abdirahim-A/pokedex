const backendUrl = 'https://pokeapi.co/api/v2'

const config = {
	resourceServer: {
		getPokemonsUrl: backendUrl + '/pokemon?limit=30&offset=480',
		getPokemonUrl: backendUrl + '/pokemon',

	},
};

export default config;
