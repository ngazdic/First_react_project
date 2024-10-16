import React from 'react';
import Logo from '../assets/react.svg';

function Navigation(props) {
	return (
		<nav className={`navbar ${props.darkMode ? 'dark' : ''} container`}>
			<div className='container'>
				<div className='d-flex'>
					<img src={Logo} alt='React Logo' className='navbar-brand' />
					<h3 className='text-info pt-2'>ReactFacts</h3>
				</div>
				<div className='toggler' onClick={props.toggleDarkMode}>
					<p className='toggler--light'>Light</p>
					<div className='toggler--slider'>
						<div className='toggler--slider--circle'></div>
					</div>
					<p className='toggler--dark'>Dark</p>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
