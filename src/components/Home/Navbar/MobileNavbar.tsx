import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import { navLinks } from '@/constants/constants';
import { MobileNavbarProps } from '@/types/types';

const MobileNavbar: React.FC<MobileNavbarProps> = ({ showNavbar, closeNavbar }) => {
	
	const navbarOpen = showNavbar ? "translate-x-0" : "translate-x-[-100%]";

	return (
		<div>
			{/* Overlay */}
			<div className={`fixed ${navbarOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
			{/* Navlinks */}
			<div className={`text-white ${navbarOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
				{navLinks.map((link) => (
					<Link key={link.id} href={link.url}>
						<p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
							{link.label}
						</p>
					</Link>
				))}
				{/* Close button */}
				<CgClose
					onClick={closeNavbar}
					className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 hover:cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default MobileNavbar;
