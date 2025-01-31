'use client';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const ResponsiveNavbar = () => {
	const [showNavbar, setShowNavbar] = useState<boolean>(false);

	const handleNavbarShow = () => {
		setShowNavbar(true);
	};
	const handleCloseNavbar = () => {
		setShowNavbar(false);
	};

	return (
		<div>
			<Navbar openNavbar={handleNavbarShow} />
			<MobileNavbar showNavbar={showNavbar} closeNavbar={handleCloseNavbar} />
		</div>
	);
};

export default ResponsiveNavbar;
