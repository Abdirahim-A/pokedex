import React from 'react';
import Card from '../../Card/Card';

function PokemonPreview() {
	return (
		<div className="mt-5 fade-up">
			<p className="text-xs font-medium opacity-50 mb-2">Favorite</p>
			<Card size="sm" pokemon={{name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/003/'}} />
		</div>
	);
}

export default PokemonPreview;
