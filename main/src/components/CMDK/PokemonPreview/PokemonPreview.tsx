import React from 'react';
import { useSettings } from '../../../context/SettingsContext';
import Card from '../../Card/Card';

function PokemonPreview() {
	const { pokemons } = useSettings();
	return (
		<div className="mt-5 fade-up">
			<p className="text-xs font-medium opacity-50 mb-2">Favorite</p>
			
            <div className='flex flex-col gap-3'>
				<Card size="sm" pokemon={pokemons[0]} />
				<Card size="sm" pokemon={pokemons[6]} />
				<Card size="sm" pokemon={pokemons[25]} />
			</div>
		</div>
	);
}

export default PokemonPreview;
