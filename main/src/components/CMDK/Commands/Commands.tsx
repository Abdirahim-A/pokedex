import React, { useEffect, useState } from 'react';

//@ts-ignore
import Icons from '../../Icons/Icons.tsx';
import { useStore } from '../../../context/StoreContext.js';

function Commands() {
	const { cmdkPage, setCmdkPage, isDark, setIsDark } = useStore();

	useEffect(() => {
		if (isDark) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDark]);
    
	return (
		<div className="mt-3">
			<ul className="list">
				<li className={`${cmdkPage === '/filter' ? '' : 'opacity-50'} `} onClick={() => setCmdkPage('/filter')}>
					<Icons type="filter" /> Filter
				</li>
				<li className={`${cmdkPage === '/sort' ? '' : 'opacity-50'} `} onClick={() => setCmdkPage('/sort')}>
					{' '}
					<Icons type="sort" />
					Sort
				</li>
				<li className={`${cmdkPage === '/favorite' ? '' : 'opacity-50'}  mb-2`} onClick={() => setCmdkPage('/favorite')}>
					<Icons type="favorite" /> Favorite
				</li>

				<li className={`opacity-50`} onClick={() => setIsDark((prev:boolean) => !prev)}>
					<Icons type="toggle" /> Toggle theme
				</li>
			</ul>
		</div>
	);
}

export default Commands;
