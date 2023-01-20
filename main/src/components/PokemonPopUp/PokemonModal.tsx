import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import config from '../../config';
import Icons from '../Icons/Icons';
import PokeStats from './PokeStats/PokeStats';

function PokemonModal() {
	const [pokemon, setPokemon] = useState<any>();

	const location = useLocation();

	useEffect(() => {
		getPokemon();
	}, []);

	const getPokemon = async () => {
		const res = await axios.get(config.resourceServer.getPokemonUrl + location.pathname);
		setPokemon(res.data);

		console.log(res);
	};
	
	return (
		<div className="overlay fade-up">
			<div className="cmdk shadow-lg">
				<div className="flex justify-between">
					<div>
						<p className="text-sm opacity-50">#{pokemon?.id}</p>
						<p className="text-xl font-medium">{pokemon?.name}</p>
					</div>
					<Link to={'/'}>
						<span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
							<Icons type="close" />
						</span>
					</Link>
				</div>
				<div className="m-auto" style={{ width: '300px' }}>
					<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon?.id}.png`} width="100%" />
				</div>

				<PokeStats />
			</div>
		</div>
	);
}

export default PokemonModal;
