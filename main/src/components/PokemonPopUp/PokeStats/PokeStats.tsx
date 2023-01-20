import React from 'react';

function PokeStats() {
	const STATS = [
		{ name: 'HP', total: 50 },
		{ name: 'Attack', total: 89 },
		{ name: 'Defence', total: 77 },
		{ name: 'Sp. Attack', total: 92 },
		{ name: 'Sp. Defence', total: 60 },
	];
	return (
		<div>
			<div className="flex gap-3 mb-5">
				<button className="btn btn-primary btn-sm">About</button>
				<button className="btn btn-primary btn-sm active">Stats</button>
				<button className="btn btn-primary btn-sm active">Evolution</button>
			</div>

			{STATS.map(stat => (
				<div className="flex flex-col mb-2">
					<div className="flex flex-row gap-5 justify-between">
						<p className="text-sm opacity-50">{stat.name}</p>

						<div className="flex flex-row gap-3 items-center">
							<p className="text-sm font-semibold">{stat.total}</p>
							<div className="bar">
								<div className="bar" style={{ width: stat.total + '%', backgroundColor: '#9FD386' }}></div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default PokeStats;
