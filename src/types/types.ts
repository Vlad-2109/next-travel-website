export interface NavbarProps {
	openNavbar: () => void;
}

export interface MobileNavbarProps {
	showNavbar: boolean;
	closeNavbar: () => void;
}

export interface SectionHeadingProps {
	heading: string;
}

export interface HotelCardProps {
	hotel: IHotel;
}

export interface IHotel {
	id: number;
	image: string;
	name: string;
	location: string;
	rating: number;
	reviews: string;
	price: string;
}

export interface WhyChooseCardProps {
	image: string;
	title: string;
}
