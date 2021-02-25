import { GiAbstract013 } from 'react-icons/gi';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';
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
		title: 'Calendar',
		path: '/calendar',
		icon: <GoCalendar />,
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
