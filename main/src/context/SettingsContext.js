import { createContext, useContext, useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://beta.pokeapi.co/graphql/v1beta',
	cache: new InMemoryCache(),
});

export const SettingContext = createContext();

export function useSettings() {
	return useContext(SettingContext);
}

export function SettingsProvider({ children }) {
	const [loading, setLoading] = useState(false);
	const [cmdkIsOpen, setCmdkIsOpen] = useState(false);
	const [cmdkPage, setCmdkPage] = useState('/favorite');
	const [pokemons, setPokemons] = useState([]);
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		getPokemons();
	}, [pokemons]);

	//715
	//788
	const getPokemons = async () => {
		setLoading(true);
		await client
			.query({
				query: gql`
					query samplePokeAPIquery {
						pokemon_v2_pokemon(limit: 30, offset: 585) {
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

	return <SettingContext.Provider value={value}>{!loading && children}</SettingContext.Provider>;
}
