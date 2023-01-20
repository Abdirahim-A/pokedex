import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import config from '../../config';
import { useSettings } from '../../context/SettingsContext';
import Icons from '../Icons/Icons';
import PokeStats from './PokeStats/PokeStats';

interface pokemonStats {
	base_stat: number;
	pokemon_v2_stat: { name: string };
}

interface Pokemons {
	name: string;
	id: number;
	pokemon_v2_pokemonstats: pokemonStats[];
}

function PokemonModal() {
	const { pokemons }: { pokemons: Pokemons[]; loading: boolean } = useSettings();
	const location = useLocation();

	const [selectedPokemon]: Pokemons[] = pokemons.filter(pokemon => pokemon.name === location.pathname.split('/')[1]);

	if (!selectedPokemon) {
		return <p>Loading</p>;
	}

	return (
		<div className="overlay fade-up">
			<div className="cmdk shadow-lg">
				<div className="flex justify-between">
					<div>
						<p className="text-sm opacity-50">#{selectedPokemon.id}</p>
						<p className="text-xl font-medium">{selectedPokemon.name}</p>
					</div>
					<Link to={'/'} className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
						<Icons type="close" />
					</Link>
				</div>
				<div className="m-auto" style={{ width: '300px' }}>
					<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${selectedPokemon.id}.png`} width="100%" />
				</div>

				<PokeStats pokemonStats={selectedPokemon.pokemon_v2_pokemonstats} />
			</div>
		</div>
	);
}

export default PokemonModal;
