import React from 'react';

// @ts-ignore
import Icons from '../../Icons/Icons.tsx';
function Commands() {
	return (
		<div className="mt-5">
			<p className="text-xs font-medium opacity-50 mb-1">Commandas</p>

			<ul className="list">
				<li className="flex flex-row items-center gap-2 font-medium mb-2 mt-2">
					<Icons type="filter" /> Filter
				</li>
				<li className="flex flex-row items-center gap-2 font-medium mb-2">
					{' '}
					<Icons type="sort" />
					Sort
				</li>
				<li className="flex flex-row items-center gap-2 font-medium">
					<Icons type="toggle" /> Toggle theme
				</li>
			</ul>
		</div>
	);
}

export default Commands;
