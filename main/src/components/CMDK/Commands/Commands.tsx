import React, { useState } from 'react';

// @ts-ignore
import Icons from '../../Icons/Icons.tsx';
import { useSettings } from '../../../context/SettingsContext.js';

function Commands() {
	const { cmdkPage, setCmdkPage } = useSettings();

	return (
		<div className="mt-5">
			<p className="text-xs font-medium opacity-50 mb-1">Commandas</p>

			<ul className="list">
				<li
					className={`flex flex-row items-center gap-2 font-medium mb-2 mt-2 ${
						cmdkPage === '/filter' ? '' : 'opacity-50'
					} hover:opacity-100 transition-opacity cursor-pointer`}
					onClick={() => setCmdkPage('/filter')}>
					<Icons type="filter" /> Filter
				</li>
				<li
					className={`flex flex-row items-center gap-2 font-medium mb-2 ${
						cmdkPage === '/sort' ? '' : 'opacity-50'
					} hover:opacity-100 transition-opacity cursor-pointer`}
					onClick={() => setCmdkPage('/sort')}>
					{' '}
					<Icons type="sort" />
					Sort
				</li>
				<li
					className={`flex flex-row items-center gap-2 font-medium ${
						cmdkPage === '/favorite' ? '' : 'opacity-50'
					} hover:opacity-100 transition-opacity cursor-pointer mb-2`}
					onClick={() => setCmdkPage('/favorite')}>
					<Icons type="favorite" /> Favorite
				</li>

				<li className={`flex flex-row items-center gap-2 font-medium opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}>
					<Icons type="toggle" /> Toggle theme
				</li>
			</ul>
		</div>
	);
}

export default Commands;
