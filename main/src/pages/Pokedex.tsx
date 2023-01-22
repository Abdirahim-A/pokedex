import React, { useCallback, useEffect, useState } from 'react';

import searchIcon from '../assets/icons/svg/fi-rr-search.svg';

import Card from '../components/Card/Card';
import CMDK from '../components/CMDK/CMDK';
import { useStore } from '../context/StoreContext.js';
import PokemonModal from '../components/PokemonModal/PokemonModal';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PokemonInterface from '../Interface/PokemonInterface';
import StoreInterface from '../Interface/StoreInterface';

function Pokedex() {
	// const [pokemons, setPokemons] = useState<Pokemons[]>([]);
	const [alteredPokemons, setAlteredPokemons] = useState<PokemonInterface[]>([]);
	const [search, setSearch] = useState<string>('');

	const location = useLocation();
	const navigate = useNavigate();

	const { pokemons, cmdkIsOpen, toggleCmdk, closeCmdk, setCmdkPage, loading }: StoreInterface = useStore();

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			// @ts-ignore
			const { key, metaKey } = e;
			if (key === 'k' && metaKey) {
				toggleCmdk();
				navigate('/');
			}

			if (key === 'Escape' && cmdkIsOpen) {
				closeCmdk();
			}

			if (key === 'Escape' && location.pathname !== '/') {
				navigate('/');
			}
		},
		[closeCmdk, cmdkIsOpen, toggleCmdk, navigate, location.pathname]
	);

	useEffect(() => {
		// @ts-ignore
		window.addEventListener('keydown', handleKeyDown, false);

		return () => {
			// @ts-ignore
			window.removeEventListener('keydown', handleKeyDown, false);
		};
	}, [handleKeyDown]);

	useEffect(() => {
		if (pokemons) {
			setAlteredPokemons(pokemons);
		}
	}, [pokemons]);

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
				<p className="opacity-50">A guide to Pokédex stats in the Pokémon games. Still a work in progress.</p>
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

			<div className="grid grid-cols-2 gap-4 justify-between lg:grid-cols-3">
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
