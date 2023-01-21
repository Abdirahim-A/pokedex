import React from 'react';

interface pokemonStats {
	base_stat: number;
	pokemon_v2_stat: { name: string };
}

function PokeStats({ pokemonStats }: { pokemonStats: pokemonStats[] }) {
	const totalStats = 230;

	const getStatColor = (stat: number) => {
		if (stat >= 90) {
			return 'bg-green-500';
		} else if (stat >= 30 && stat < 90) {
			return 'bg-orange-400';
		} else {
			return 'bg-red-400';
		}
	};

	return (
		<>
			{pokemonStats.map(stat => (
				<div className="flex flex-col mb-2" key={stat.pokemon_v2_stat.name + '-poke'}>
					<div className="flex flex-row gap-5 justify-between">
						<p className="text-sm opacity-50 capitalize">{stat.pokemon_v2_stat.name}</p>

						<div className="flex flex-row gap-3 items-center">
							<p className="text-sm font-semibold">{stat.base_stat}</p>
							<div className="bar" style={{backgroundColor: 'var(--color-gray-100'}}>
								<div
									className={`bar bg ${getStatColor(stat.base_stat)}`}
									style={{ width: (stat.base_stat / totalStats) * 100 + '%' }}></div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default PokeStats;
