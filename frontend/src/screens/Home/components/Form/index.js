import { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useSpeechContext } from '@speechly/react-client';

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

	const { segment } = useSpeechContext();

	const [goal, setGoal] = useState('');

	const handleSubmit = useCallback(
		async (e) => {
			if (e) {
				e.preventDefault();
			}
			dispatch(
				createGoal(
					{
						title: goal,
					},
					userInfo.token
				)
			);
			setGoal('');
		},
		[dispatch, userInfo.token, goal]
	);

	const validateForm = useCallback(() => {
		return goal.length > 0;
	}, [goal]);

	useEffect(() => {
		if (segment) {
			if (segment.intent.intent === 'add_goal') {
				const goal = segment.words
					.map((w) => w.value)
					.join(' ')
					.split('GOAL IS')[1]
					?.trim();
				if (!goal) {
					return;
				}
				setGoal(`${goal.charAt(0)}${goal.slice(1).toLowerCase()}`);
			}
			if (segment.isFinal) {
				if (validateForm()) {
					handleSubmit();
				}
				segment.words = [];
			}
		}
		// eslint-disable-next-line
	}, [segment, userInfo]);

	const handleChange = (e) => {
		setGoal(e.target.value);
	};

	const { loading, error } = useSelector((state) => state.createGoal);

	return (
		<FormWrapper isOpen={isOpen || segment?.words?.length > 0}>
			<p>
				{segment && segment.words.map((word) => word.value).join(' ')}
			</p>
			<StyledForm onSubmit={handleSubmit}>
				{loading && <Loader />}
				{error && <Message error>{error}</Message>}
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type="text"
							required
							name="note"
							value={goal}
							onChange={handleChange}
							placeholder="Goal"
						/>
					}
				/>
				<AuthBtn medium type="submit" disabled={!validateForm()}>
					Add New Goal
				</AuthBtn>
				<div style={{ marginBottom: '1rem' }}></div>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
