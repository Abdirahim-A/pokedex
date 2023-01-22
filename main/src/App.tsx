import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/';
import { StoreProvider } from './context/StoreContext';

function App() {
	return (
		<main className="App">
			<StoreProvider>
				<Routes>
					{publicRoutes.map((route, index) => (
						<Route key={index} path={route.path} element={route.component} />
					))}
				</Routes>
			</StoreProvider>
		</main>
	);
}

export default App;
