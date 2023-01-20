import React from 'react';

interface pokemonStats {
	base_stat: number;
	pokemon_v2_stat: { name: string };
}

function PokeStats({ pokemonStats }: { pokemonStats: pokemonStats[] }) {

	const totalStats = 190;

	const getStatColor = (stat: number) => {
		if (stat >= 90) {
			return 'bg-lime-400';
		} else if (stat >= 30 && stat < 90) {
			return 'bg-orange-400';
		} else {
			return 'bg-red-400';
		}
	};

	return (
		<div>
			<div className="flex gap-3 mb-5">
				<button className="btn btn-primary btn-sm">About</button>
				<button className="btn btn-primary btn-sm active">Stats</button>
				<button className="btn btn-primary btn-sm active">Evolution</button>
			</div>

			{pokemonStats.map(stat => (
				<div className="flex flex-col mb-2" key={stat.pokemon_v2_stat.name + '-poke'}>
					<div className="flex flex-row gap-5 justify-between">
						<p className="text-sm opacity-50">{stat.pokemon_v2_stat.name}</p>

						<div className="flex flex-row gap-3 items-center">
							<p className="text-sm font-semibold">{stat.base_stat}</p>
							<div className="bar bg-gray-100">
								<div
									className={`bar bg ${getStatColor(stat.base_stat)}`}
									style={{ width: (stat.base_stat / totalStats) * 100 + '%' }}></div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default PokeStats;
