import { AiOutlineStar } from 'react-icons/ai';
import { BiBitcoin, BiBall } from 'react-icons/bi';
import { GrTechnology, GrAccessibility } from 'react-icons/gr';
import { MdBusiness } from 'react-icons/md';
import { RiMoneyEuroCircleLine, RiMentalHealthLine } from 'react-icons/ri';

export const newsFilterTags = [
	{
		title: 'Crypto',
		icon: <BiBitcoin />,
	},
	{
		title: 'Finance',
		icon: <RiMoneyEuroCircleLine />,
	},
	{
		title: 'Health',
		icon: <RiMentalHealthLine />,
	},
	{
		title: 'Lifestyle',
		icon: <GrAccessibility />,
	},
	{
		title: 'Sport',
		icon: <BiBall />,
	},
];

export const mustHaveTags = [
	{
		title: 'Popular',
		icon: <AiOutlineStar />,
	},
	{
		title: 'Technology',
		icon: <GrTechnology />,
	},
	{
		title: 'Business',
		icon: <MdBusiness />,
	},
]