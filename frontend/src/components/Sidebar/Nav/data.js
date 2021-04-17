import { GiAbstract013 } from 'react-icons/gi';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { RiMentalHealthFill } from 'react-icons/ri';
import { BsNewspaper } from 'react-icons/bs';
import { ImBooks } from 'react-icons/im';
import { GrBitcoin } from 'react-icons/gr';

export const navData = [
	{
		title: 'Dashboard',
		path: '/',
		icon: <GiAbstract013 />,
	},
	{
		title: 'Wallet',
		path: '/wallet',
		icon: <FaMoneyBillAlt />,
	},
	{
		title: 'Health',
		path: '/health',
		icon: <RiMentalHealthFill />,
	},
	{
		title: 'News',
		path: '/news',
		icon: <BsNewspaper />,
	},
	{
		title: 'Books',
		path: '/books',
		icon: <ImBooks />,
	},
	{
		title: 'Crypto',
		path: '/crypto',
		icon: <GrBitcoin />,
	},
];
