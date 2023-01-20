import React from 'react';
import './Card.scss';

interface pokemonStatsModel {
	base_stat: number;
	pokemon_v2_stat: { name: string };
}

interface pokemonTypesModel {
	pokemon_v2_type: { name: string };
}

interface Pokemon {
	name: string;
	id: number;
	pokemon_v2_pokemonstats: pokemonStatsModel[];
	pokemon_v2_pokemontypes: pokemonTypesModel[];
}

function Card({ size, pokemon }: { size: string; pokemon: Pokemon }) {
	switch (size) {
		case 'sm':
			return (
				<div className={`card ${size}`}>
					<div className="flex flex-row items-center gap-3">
						<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`} />
						<p className="text-md font-medium">{pokemon.name}</p>
					</div>

					<p className="text-xs opacity-50">#{pokemon.id}</p>
				</div>
			);

		case 'md':
			return (
				<div className={`card ${size}`}>
					<p className="text-xs opacity-50">#{pokemon.id}</p>

					<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`} width="50px" />

						<p className="text-lg font-medium mb-1">{pokemon.name}</p>
						<div className="flex flex-row gap-3">
							{pokemon.pokemon_v2_pokemontypes.map(types => (
								<div className="flex flex-row gap-1 items-center">
									<div className={`mini-circle ${types.pokemon_v2_type.name}`}></div>
									<p className="text-xs opacity-50">{types.pokemon_v2_type.name}</p>
								</div>
							))}
						</div>
				</div>
			);

		default:
			return (
				<div className={`card ${size}`}>
					<div className="flex flex-row items-center gap-3">
						<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`} width="50px" />
						<div>
							<p className="text-xs opacity-50">#{pokemon.id}</p>
							<p className="text-md font-medium">{pokemon.name}</p>
						</div>
					</div>

					<div className="flex flex-row gap-2">
						<p className="text-xs opacity-50">dark</p>
						<p className="text-xs opacity-50">fire</p>
					</div>
				</div>
			);
	}
}

export default Card;
