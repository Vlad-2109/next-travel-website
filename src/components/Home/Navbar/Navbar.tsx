'use client';
import Link from 'next/link';
import { TbAirBalloon } from 'react-icons/tb';
import { navLinks } from '@/constants/constants';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { NavbarProps } from '@/types/types';
import { useEffect, useState } from 'react';

const Navbar: React.FC<NavbarProps> = ({ openNavbar }) => {
	const [navbarBg, setNavbarBg] = useState<boolean>(false);

	useEffect(() => {
		const handler = () => {
			if (window.scrollY >= 90) setNavbarBg(true);
			if (window.scrollY < 90) setNavbarBg(false);
		};

		window.addEventListener('scroll', handler);

		return () => window.removeEventListener('scroll', handler);
	}, []);

	return (
		<div className={`${navbarBg ? 'bg-blue-950 shadow-md' : 'fixed'} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
			<div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
				{/* LOGO */}
				<div className="flex items-center space-x-2">
					<div className="w-10 h-10 bg-rose-500 rounded-full flex flex-col items-center justify-center">
						<TbAirBalloon className="w-6 h-6 text-white" />
					</div>
					<h1 className="text-xl md:text-2xl text-white uppercase font-bold">
						Tripi
					</h1>
				</div>
				{/* NavLinks */}
				<div className="hidden lg:flex items-center space-x-10">
					{navLinks.map((link) => (
						<Link href={link.url} key={link.id}>
							<p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-all duration-300 after:origin-right">
								{link.label}
							</p>
						</Link>
					))}
				</div>
				{/* buttons */}
				<div className="flex items-center space-x-4">
					<button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
						Book Now
					</button>
					{/* Burger Menu */}
					<HiBars3BottomRight
						onClick={openNavbar}
						className="w-8 h-8 cursor-pointer text-white lg:hidden"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
