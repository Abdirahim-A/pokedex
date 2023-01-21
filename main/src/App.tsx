import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/';
import { SettingsProvider, useSettings } from './context/SettingsContext';


function App() {
    


  
	return (
		<main className="App">
			<SettingsProvider>
				<Routes>
					{publicRoutes.map((route, index) => (
						<Route key={index} path={route.path} element={route.component} />
					))}
				</Routes>
			</SettingsProvider>
		</main>
	);
}

export default App;
