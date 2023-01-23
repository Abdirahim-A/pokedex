import React from 'react';

function FilterOptions() {
	const OPTIONS = ['fire', 'dark', 'ice', 'fairy', 'poison', 'psychic'];

	return (
		<div className="mt-5 fade-up">
			<h3 className="text-lg font-medium mb-3"> Filter By </h3>

			<div className="mb-3">
				<p className="text-xs font-medium opacity-50 mb-2">Type</p>

				<div className="flex flex-row flex-wrap gap-2">
					{OPTIONS.map(option => (
						<button className="btn btn-primary btn-sm disabled" key={option}>
							{option}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

export default FilterOptions;
