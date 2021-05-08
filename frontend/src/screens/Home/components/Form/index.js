import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { useSpeechContext } from '@speechly/react-client'

import InputField from '../../../../components/InputField';
import Loader from '../../../../components/Loader';
import Message from '../../../../components/Message';
import { AuthBtn } from '../../../../theme/Button';

import { RiFilePaper2Line } from 'react-icons/ri';

import { FormWrapper, StyledForm } from './style';

import { createGoal } from '../../../../redux/actions/goalActions';

const Form = ({ isOpen }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { segment } = useSpeechContext()

	const [goal, setGoal] = useState('');

	useEffect(() => {
		if(segment) {
			if(segment.intent.intent === 'add_goal' && segment.isFinal) {
				const goal = segment.words.map(w => w.value).join(' ').split('GOAL IS')[1]?.trim()
				if(!goal) {
					return;
				}
				setGoal(`${goal.charAt(0)}${goal.slice(1).toLowerCase()}`);
				dispatch(
					createGoal(
						{
							title: goal,
						},
						userInfo.token
					)
				);
			}
		}
	}, [segment, dispatch, userInfo])

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			createGoal(
				{
					title: goal,
				},
				userInfo.token
			)
		);
		setGoal('');
	};

	const handleChange = (e) => {
		setGoal(e.target.value);
	};

	const validateForm = () => {
		return goal.length > 0;
	};

	const { loading, error } = useSelector((state) => state.createGoal);

	return (
		<FormWrapper isOpen={isOpen || segment?.words?.length > 0}>
			<p>
				{segment && segment.words.map(word => word.value).join(' ')}
			</p>
			<StyledForm onSubmit={handleSubmit}>
			{loading && <Loader />}
				{error && <Message error>{error}</Message>}
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type='text'
							required
							name='note'
							value={goal}
							onChange={handleChange}
							placeholder='Goal'
						/>
					}
				/>
				<AuthBtn medium type='submit' disabled={!validateForm()}>
					Add New Goal
				</AuthBtn>
				<div style={{marginBottom: '1rem'}}></div>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
