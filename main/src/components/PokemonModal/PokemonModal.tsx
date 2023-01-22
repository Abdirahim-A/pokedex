import './PokemonModal.scss';

import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import Icons from '../Icons/Icons';
import PokeStats from './PokeStats/PokeStats';

import PokemonInterface from '../../Interface/PokemonInterface';

function PokemonModal() {
	const { pokemons }: { pokemons: PokemonInterface[] } = useStore();
	const location = useLocation();

	const [selectedPokemon]: PokemonInterface[] = pokemons.filter(pokemon => pokemon.name === location.pathname.slice(1));

	if (!selectedPokemon) {
		return <p>Loading</p>;
	}

	return (
		<div className="overlay fade-up">
			<div className="cmdk shadow-lg">
				<div className={`bg-blur ${selectedPokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}`}></div>
				<div className="flex justify-between">
					<div>
						<p className="text-sm opacity-50">#{selectedPokemon.id}</p>
						<p className="text-xl font-medium capitalize">{selectedPokemon.name}</p>
					</div>
					<Link to={'/'} className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
						<Icons type="close" />
					</Link>
				</div>

				<div className="m-auto mb-3" style={{ width: '300px', position: 'relative', zIndex: '1' }}>
					<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${selectedPokemon.id}.png`} width="100%" />
				</div>

				<div className="flex gap-3 mb-5 mt-5">
					<button className="btn btn-primary btn-sm">Stats</button>
					<button className="btn btn-primary btn-sm disabled">Details</button>
					<button className="btn btn-primary btn-sm disabled">Evolution</button>
				</div>

				<PokeStats pokemonStats={selectedPokemon.pokemon_v2_pokemonstats} />
			</div>
		</div>
	);
}

export default PokemonModal;
