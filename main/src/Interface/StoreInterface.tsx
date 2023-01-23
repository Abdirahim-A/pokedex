import PokemonInterface from './PokemonInterface';

interface StoreInterface {
	pokemons: PokemonInterface[];
	cmdkIsOpen: boolean;
	toggleCmdk: () => void;
	closeCmdk: () => void;
	setCmdkPage: (page: string) => void;
	isDark: boolean;
	setIsDark: () => void;
	loading: boolean;
}

export default StoreInterface;
