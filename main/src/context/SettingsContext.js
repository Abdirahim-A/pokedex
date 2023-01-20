import { createContext, useContext, useState } from 'react';

export const SettingContext = createContext();

export function useSettings() {
	return useContext(SettingContext);
}

export function SettingsProvider({ children }) {
	const [loading] = useState(false);
	const [cmdkIsOpen, setCmdkIsOpen] = useState(false);
	const [cmdkPage, setCmdkPage] = useState('/favorite');

	const toggleCmdk = (page = null) => {
		setCmdkIsOpen(prev => !prev);

		if (page) setCmdkPage(page);
	};

	const value = {
		loading,
		cmdkIsOpen,
		toggleCmdk,
		cmdkPage,
		setCmdkPage
	};

	return <SettingContext.Provider value={value}>{!loading && children}</SettingContext.Provider>;
}
