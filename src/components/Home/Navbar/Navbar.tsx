import Link from 'next/link';
import { TbAirBalloon } from 'react-icons/tb';
import { navLinks } from '@/constants/constants';

const Navbar = () => {
	return (
		<div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]">
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
			</div>
		</div>
	);
};

export default Navbar;
