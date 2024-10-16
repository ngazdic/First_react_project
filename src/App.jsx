import React from 'react';
import Navigation from './components/Navbar';
import Main from './components/Main';
import './style.css';

export default function App() {
	const [darkMode, setDarkMode] = React.useState(true);

	function toggleDarkMode() {
		setDarkMode((prevMode) => !prevMode);
	}

	return (
		<div className='container'>
			<Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Main darkMode={darkMode} />
		</div>
	);
}
