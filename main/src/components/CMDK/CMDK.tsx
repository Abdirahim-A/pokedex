import React from 'react';
import './CMDK.scss';

import Commands from './Commands/Commands';
import PokemonPreview from './PokemonPreview/PokemonPreview';
import searchIcon from '../../assets/icons/svg/fi-rr-search.svg';

function CMDK() {
	return (
		<div className="overlay">
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

				<PokemonPreview />
			</div>
		</div>
	);
}

export default CMDK;
