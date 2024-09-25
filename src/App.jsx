import React from 'react';
import './App.css';
import Main from './components/main-page.jsx'; // Importing Main component
import Navigation from './components/nav.jsx'; // Importing Navigation component

function App() {
	return (
		<div>
			<Navigation />

			<div id='main-div' className='container bg-dark text-start pb-5 '>
				<Main />
			</div>
		</div>
	);
}

export default App;
