import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { listGoals } from '../../redux/actions/goalActions';

import { PushToTalkButtonContainer, PushToTalkButton, ErrorPanel }  from '@speechly/react-ui'

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
import Graph from './components/Graph'

import {Content, Illustration, SpeechlyWrapper} from './style'

import ProgressSvg from '../../assets/svg/progress.svg';

import { dateStringFormatter, dateOrStringToday } from '../../helpers/date'


const Home = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const [startDate, setStartDate] = useState(new Date());

	useEffect(() => {
		dispatch(listGoals(userInfo.token));
	}, [dispatch, userInfo.token]);

	const { loading, error, goals } = useSelector(
		(state) => state.goalList
	);

	const goalsByDate = goals ? goals.filter(goal => goal.date.split('T')[0] === startDate.toISOString().split('T')[0]) : []
	
	const completedGoals = goalsByDate ? goalsByDate.filter(goal => goal.isCompleted) : [];
	
	const [isFormOpen, setIsFormOpen] = useState(false);
	

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
			<SpeechlyWrapper>
				<PushToTalkButtonContainer>
					<PushToTalkButton size="4rem" />
					<ErrorPanel />
				</PushToTalkButtonContainer>
			</SpeechlyWrapper>
			<Banner>
				<Content>
					<h2 style={{marginBottom: '1rem'}}>Hello, {userInfo.username}</h2>
					<p>You achieved <b>{parseFloat(((completedGoals?.length / goalsByDate?.length) || 0) * 100).toFixed(2)}%</b> of your goals {dateOrStringToday(startDate)}!</p>
				</Content>
				<Illustration src={ProgressSvg} alt='Progress' />
			</Banner>
			<GoalList goals={goalsByDate} date={startDate}>
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
					leftGoalsCount={goalsByDate?.length - completedGoals?.length}
					title={`Goals - ${dateStringFormatter(startDate)}`} 
				/>
			</GoalList>
			<Graph goals={goals} />
		</Container>
	</div>;
};

export default Home;
