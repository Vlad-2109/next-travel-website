import Image from 'next/image';
import { WhyChooseCardProps } from '@/types/types';

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ image, title }) => {
	return (
		<div>
			{/* Image */}
			<Image
				src={image}
				width={70}
				height={70}
				alt="image"
				className="mx-auto"
			/>
			{/* Content */}
			<h1 className="mt-6 text-center text-gray-9000 font-medium text-lg">
				{title}
			</h1>
			<p className="mt-2 text-center text-xs font-medium text-gray-700">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente a
				tenetur ipsam.
			</p>
		</div>
	);
};

export default WhyChooseCard;
