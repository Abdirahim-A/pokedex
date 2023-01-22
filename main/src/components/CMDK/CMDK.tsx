import React, { useEffect } from 'react';
import './CMDK.scss';

import Commands from './Commands/Commands';
import PokemonPreview from './PokemonPreview/PokemonPreview';
import FilterOptions from '../FilterOptions/FilterOptions';
import SortOptions from './SortOptions/SortOptions';

import { useStore } from '../../context/StoreContext.js';

import searchIcon from '../../assets/icons/svg/fi-rr-search.svg';
import Icons from '../Icons/Icons';

function CMDK() {
	const { cmdkPage, closeCmdk } = useStore();

	return (
		<div className="overlay fade-up">
			<div className="cmdk shadow-lg">
				<div className="flex flex-row justify-between mb-5">
					<p className="text-xs font-medium opacity-50">home</p>
					<span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => closeCmdk()}>
						<Icons type="close" />
					</span>
				</div>

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
