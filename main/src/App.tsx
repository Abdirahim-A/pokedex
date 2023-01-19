import React, { useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/';

// @ts-ignore
import CMDK from './components/CMDK/CMDK.tsx';

function App() {
	const handleKeyDown = () => {
		console.log('yeessss');
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<main className="App">
			{/* <CMDK /> */}
			<Routes>
				{publicRoutes.map((route, index) => (
					<Route key={index} path={route.path} element={route.component} />
				))}
			</Routes>
		</main>
	);
}

export default App;
