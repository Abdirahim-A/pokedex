import React from 'react';
import './CMDK.scss';

import Commands from './Commands/Commands';
import PokemonPreview from './PokemonPreview/PokemonPreview';
import searchIcon from '../../assets/icons/svg/fi-rr-search.svg';
import { useSettings } from '../../context/SettingsContext.js';
import FilterOptions from '../FilterOptions/FilterOptions';
import SortOptions from './SortOptions/SortOptions';

function CMDK() {
	const { cmdkPage } = useSettings();

	return (
		<div className="overlay fade-up">
			<div className="cmdk shadow-lg">
				<p className="text-xs font-medium opacity-50 mb-2">Home</p>
				<input
					type="text"
					style={{
						backgroundImage: `url(${searchIcon})`,
					}}
					className="text-input"
					placeholder="Search..."
				/>

				<Commands />
				{cmdkPage === '/sort' && <SortOptions />}
				{cmdkPage === '/filter' && <FilterOptions />}
				{cmdkPage === '/favorite' && <PokemonPreview />}
			</div>
		</div>
	);
}

export default CMDK;
