import React, { useEffect, useState } from 'react';

import searchIcon from '../assets/icons/svg/fi-rr-search.svg';

import Card from '../components/Card/Card';
import CMDK from '../components/CMDK/CMDK';
import { useSettings } from '../context/SettingsContext.js';
import PokemonModal from '../components/PokemonPopUp/PokemonModal';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface pokemonStatsModel {
	base_stat: number;
	pokemon_v2_stat: { name: string };
}

interface pokemonTypesModel {
	pokemon_v2_type: { name: string };
}

interface Pokemons {
	name: string;
	id: number;
	pokemon_v2_pokemonstats: pokemonStatsModel[];
	pokemon_v2_pokemontypes: pokemonTypesModel[];
}

function Pokedex() {
	// const [pokemons, setPokemons] = useState<Pokemons[]>([]);
	const [alteredPokemons, setAlteredPokemons] = useState<Pokemons[]>([]);
	const [search, setSearch] = useState<string>('');

	const location = useLocation();
	const navigate = useNavigate();

	const {
		pokemons,
		cmdkIsOpen,
		toggleCmdk,
		setCmdkPage,
		loading,
	}: { pokemons: Pokemons[]; cmdkIsOpen: boolean; toggleCmdk: () => void; setCmdkPage: (e: any) => void; loading: boolean } = useSettings();

	const handleKeyDown = (e: KeyboardEvent) => {
		// @ts-ignore
		const { key, metaKey } = e;
		if (key === 'k' && metaKey) {
			toggleCmdk();
			navigate('/');
		}
	};

	useEffect(() => {
		if (pokemons) {
			setAlteredPokemons(pokemons);
		}
		// @ts-ignore
		window.addEventListener('keydown', handleKeyDown, false);

		return () => {
			// @ts-ignore
			window.removeEventListener('keydown', handleKeyDown, false);
		};
	}, []);

	if (loading) {
		return <p>Loading</p>;
	}

	const handleChange = (e: React.ChangeEvent<any>) => {
		const { value } = e.target;
		setSearch(value);

		const filteredPokemons = pokemons.filter((pokemon: any) => pokemon.name.includes(value));
		setAlteredPokemons(filteredPokemons);
	};

	return (
		<>
			{cmdkIsOpen && location.pathname === '/' && <CMDK />}
			{!cmdkIsOpen && location.pathname !== '/' && <PokemonModal />}

			<div className="mb-5">
				<h2 className="font-semibold text-xl">
					Poked<span className="text-red-500">é</span>x
				</h2>
				<p className="opacity-50">A guide to Pokédex stats in the Pokémon games</p>
			</div>

			<div className="mb-6">
				<input
					type="text"
					style={{
						backgroundImage: `url(${searchIcon})`,
					}}
					className="text-input lg mb-3"
					placeholder="Search or ⌘K"
					value={search}
					onChange={e => handleChange(e)}
				/>

				<div className="flex flex-row gap-3">
					<button
						className="btn btn-primary"
						onClick={() => {
							setCmdkPage('/filter');
							toggleCmdk();
						}}>
						Filter
					</button>
					<button
						className="btn btn-primary"
						onClick={() => {
							setCmdkPage('/sort');
							toggleCmdk();
						}}>
						Sort
					</button>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4 justify-between">
				{alteredPokemons.map(pokemon => (
					<Link to={'/' + pokemon.name} key={pokemon.name}>
						<Card size={'md'} pokemon={pokemon} />
					</Link>
				))}
			</div>
		</>
	);
}

export default Pokedex;
