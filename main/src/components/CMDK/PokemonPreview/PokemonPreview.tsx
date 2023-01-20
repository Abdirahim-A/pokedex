import React from 'react';
import { useSettings } from '../../../context/SettingsContext';
import Card from '../../Card/Card';

function PokemonPreview() {
	const { pokemons } = useSettings();
	return (
		<div className="mt-5 fade-up">
			<p className="text-xs font-medium opacity-50 mb-2">Favorite</p>
			<Card size="sm" pokemon={pokemons[0]} />
		</div>
	);
}

export default PokemonPreview;
