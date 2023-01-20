import React from 'react';
import './Card.scss';

function Card({ size, pokemon }: { size: string; pokemon: { name: string; url: string } }) {
	switch (size) {
		case 'sm':
			return (
				<div className={`card ${size}`}>
					<div className="flex flex-row items-center gap-3">
						<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.url.split('/')[6]}.png`} />
						<p className="text-md font-medium">{pokemon.name}</p>
					</div>

					<p className="text-xs opacity-50">#{pokemon.url.split('/')[6]}</p>
				</div>
			);

		case 'md':
			return (
				<div className={`card ${size}`}>
					<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.url.split('/')[6]}.png`} width="50px" />
					<div>
						<p className="text-xs opacity-50">#{pokemon.url.split('/')[6]}</p>
						<p className="text-md font-medium">{pokemon.name}</p>
					</div>
				</div>
			);

		default:
			return (
				<div className={`card ${size}`}>
					<div className="flex flex-row items-center gap-3">
						<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.url.split('/')[6]}.png`} width="50px" />
						<div>
							<p className="text-xs opacity-50">#{pokemon.url.split('/')[6]}</p>
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
