import { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Container from '../../layout/Container'
import TitleBar from '../../components/TitleBar'
import Subtitle from '../../components/Subtitle';
import Title from '../../components/TitleBar/Title'
import Add from '../../widgets/Add';
import Banner from '../../components/Banner'
import Pagination from '../../components/Pagination'

import GoalList from './components/GoalList'
import Stats from './components/Stats'

import Form from './components/Form'

import {Content, Illustration} from './style'

import ProgressSvg from '../../assets/svg/progress.svg';

import { dateStringFormatter } from '../../helpers/date'
import Card from './components/Card';


const Home = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const [startDate, setStartDate] = useState(new Date());

	const handleDateChange = (date) => {
		setStartDate(date);
	};

	const openForm = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};

	const goals = [
		{
			id: '1', date: new Date(), isCompleted: false, title: 'Goal1',
		},
		{
			id: '2', date: new Date(), isCompleted: false, title: 'Goal2',
		},
		{
			id: '3', date: new Date(), isCompleted: false, title: 'Goal3',
		},
	]

	return <div>
		<Container>
			<TitleBar>
				<Title>Home</Title>
				<Add handleClick={openForm} />
			</TitleBar>
			<Form isOpen={isFormOpen} />
			<Banner>
				<Content>
					<h2 style={{marginBottom: '1rem'}}>Hello, James Anderson</h2>
					<p>You achieved <b>90%</b> of your goals today!</p>
				</Content>
				<Illustration src={ProgressSvg} alt='Progress' />
			</Banner>
			<GoalList>
				<TitleBar>
					<Subtitle>Choose Day:</Subtitle>
					<div style={{ width: '240px' }}>
						<DatePicker
							selected={startDate}
							onChange={handleDateChange}
							dateFormat='d MMMM, y'
						/>
					</div>
				</TitleBar>
				<Stats title={`Goals - ${dateStringFormatter(startDate)}`} />
				<Pagination
					pages={[...Array(10).keys()]}
					currPage={2}
					setCurrentPage={() => {}}
				/>
				<Card />
			</GoalList>
			<h1>Chart</h1>
		</Container>
	</div>;
};

export default Home;
