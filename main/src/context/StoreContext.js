import { createContext, useContext, useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://beta.pokeapi.co/graphql/v1beta',
	cache: new InMemoryCache(),
});

export const StoreContext = createContext();

export function useStore() {
	return useContext(StoreContext);
}

export function StoreProvider({ children }) {
	const [loading, setLoading] = useState(false);
	const [isDark, setIsDark] = useState(false)

	const [cmdkIsOpen, setCmdkIsOpen] = useState(false);
	const [cmdkPage, setCmdkPage] = useState('/favorite');

	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		getPokemons();
	}, [pokemons]);

	//715
	//788
	//480
	const getPokemons = async () => {
		setLoading(true);
		await client
			.query({
				query: gql`
					query samplePokeAPIquery {
						pokemon_v2_pokemon(limit: 30, offset: 383) {
							id
							name
							pokemon_v2_pokemonstats {
								base_stat
								effort
								pokemon_v2_stat {
									name
								}
							}
							weight
							height
							pokemon_v2_pokemontypes {
								pokemon_v2_type {
									name
								}
							}
						}
					}
				`,
			})
			.then(result => setPokemons(result.data.pokemon_v2_pokemon));
		setLoading(false);
	};

	const toggleCmdk = (page = null) => {
		setCmdkIsOpen(prev => !prev);

		if (page) setCmdkPage(page);
	};

	const closeCmdk = () => {
		setCmdkIsOpen(false);
	};

	const value = {
		loading,
		cmdkIsOpen,
		toggleCmdk,
		cmdkPage,
		setCmdkPage,
		pokemons,
		closeCmdk,
		isDark,
		setIsDark
	};

	return <StoreContext.Provider value={value}>{!loading && children}</StoreContext.Provider>;
}
