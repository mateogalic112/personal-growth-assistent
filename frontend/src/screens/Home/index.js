import { useState, useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { listGoals } from '../../redux/actions/goalActions';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Container from '../../layout/Container'
import TitleBar from '../../components/TitleBar'
import Subtitle from '../../components/Subtitle';
import Title from '../../components/TitleBar/Title'
import Add from '../../widgets/Add';
import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

import GoalList from './components/GoalList'
import Stats from './components/Stats'

import Form from './components/Form'

import {Content, Illustration} from './style'

import ProgressSvg from '../../assets/svg/progress.svg';

import { dateStringFormatter } from '../../helpers/date'


const Home = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	useEffect(() => {
		dispatch(listGoals(userInfo.token));
	}, [dispatch, userInfo.token]);

	const { loading, error, goals } = useSelector(
		(state) => state.goalList
	);

	const completedGoals = goals ? goals.filter(goal => goal.isCompleted) : [];

	const [isFormOpen, setIsFormOpen] = useState(false);

	const [startDate, setStartDate] = useState(new Date());

	const handleDateChange = (date) => {
		setStartDate(date);
	};

	const openForm = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};

	if (loading) return <Loader />;

	if (error) return <Message error={error} />;

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
					<p>You achieved <b>{parseFloat(completedGoals?.length / goals?.length * 100).toFixed(2)}%</b> of your goals today!</p>
				</Content>
				<Illustration src={ProgressSvg} alt='Progress' />
			</Banner>
			<GoalList goals={goals} date={startDate}>
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
				<Stats
					completedGoalsCount={completedGoals?.length}
					leftGoalsCount={goals?.length - completedGoals?.length}
					title={`Goals - ${dateStringFormatter(startDate)}`} 
				/>
			</GoalList>
		</Container>
	</div>;
};

export default Home;
