import React from 'react';
import Logo from '../assets/react.svg'; // Correct path

function Navigation() {
	return (
		<nav className='navbar navbar-expand-lg bg-secondary '>
			<div className='container'>
				<div className='d-flex'>
					<img src={Logo} alt='React Logo' className='navbar-brand' />
					<h3 className='text-info pt-2'>ReactFacts</h3>
				</div>
				<p className='text-white  p-navbar'>React course - project 1</p>
			</div>
		</nav>
	);
}

export default Navigation;
