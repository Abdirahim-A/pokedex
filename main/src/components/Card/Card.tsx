import React from 'react';
import './Card.scss';

function Card({ size }: { size: string }) {
	switch (size) {
		case 'sm':
			return (
				<div className={`card ${size}`}>
					<div className="flex flex-row items-center gap-3">
						<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/1004.png" width="50px" />
						<div>
							<p className="text-xs opacity-50">#1004</p>
							<p className="text-md font-medium">Chi-Yu</p>
						</div>
					</div>

					<div className="flex flex-row gap-2">
						<p className="text-xs opacity-50">dark</p>
						<p className="text-xs opacity-50">fire</p>
					</div>
				</div>
			);

		case 'md':
			return (
				<div className={`card ${size}`}>
					<p className="text-xs opacity-50">#1004</p>

					<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/1004.png" width="50px" />

					<div>
						<p className="text-md font-medium">Chi-Yu</p>
						<div className="flex flex-row gap-2">
							<p className="text-xs opacity-50">dark</p>
							<p className="text-xs opacity-50">fire</p>
						</div>
					</div>
				</div>
			);
		default:
			return (
				<div className={`card ${size}`}>
					<div className="flex flex-row items-center gap-3">
						<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/1004.png" width="50px" />
						<div>
							<p className="text-xs opacity-50">#1004</p>
							<p className="text-md font-medium">Chi-Yu</p>
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
