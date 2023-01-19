import React from 'react';
import searchIcon from '../assets/icons/svg/fi-rr-search.svg';
import Card from '../components/Card/Card';

function Pokedex() {
	return (
		<div>
			<div className="mb-5">
				<h2 className="font-semibold text-xl">Pokedex</h2>
				<p className="opacity-50">A guide to Pokédex stats in the Pokémon games</p>
			</div>

			<div className="mb-6">
				<input
					type="text"
					style={{
						backgroundImage: `url(${searchIcon})`,
					}}
					className="text-input lg mb-3"
					placeholder="Search..."
				/>
				<div className="flex flex-row gap-3">
					<button className="btn btn-primary">Filter</button>
					<button className="btn btn-primary">Sort</button>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4 justify-between">
				<Card size={'md'} />
				<Card size={'md'} />
				<Card size={'md'} />
			</div>
		</div>
	);
}

export default Pokedex;
