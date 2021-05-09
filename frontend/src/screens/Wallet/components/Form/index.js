import { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createTransaction } from '../../../../redux/actions/transactionActions';

import { useSpeechContext } from '@speechly/react-client'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';
import Loader from '../../../../components/Loader';
import Message from '../../../../components/Message';

import { RiFilePaper2Line } from 'react-icons/ri';
import { BiMoney } from 'react-icons/bi';

import { FormWrapper, StyledForm } from './style';
import Subtitle from '../../../../components/Subtitle';
import { RadioField, RadioWrapper } from '../../../Register/style';

const Form = ({ isOpen }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { segment } = useSpeechContext()

	const [state, setState] = useState({
		name: '',
		type: 'income',
		amount: '',
	});

	const [startDate, setStartDate] = useState(new Date());

	const handleDateChange = (date) => {
		setStartDate(date);
	};

	const handleSubmit = useCallback(async (e) => {
		if(e) {
			e.preventDefault();
		}
		dispatch(
			createTransaction(
				state.name,
				state.type,
				state.amount,
				userInfo.token,
				startDate,
			)
		);
		setState({
			name: '',
			type: 'income',
			amount: '',
		});
		setStartDate(new Date());
	}, [dispatch, state, userInfo, startDate]);

	const { loading, error } = useSelector((state) => state.createTransaction);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = useCallback(() => {
		return state.name.length > 1 && parseFloat(state.amount) > 0;
	}, [state]);

	useEffect(() => {
		if(segment) {
			if(segment.intent.intent === 'income_transaction') {
				setState({...state, type: 'income'});
			} else if(segment.intent.intent === 'expense_transaction') {
				setState({...state, type: 'expense'});
			}
			segment.entities.forEach(entity => {
				switch(entity.type) {
					case 'item':
						setState({...state, name: entity.value})
						break;
					case 'amount':
						setState({...state, amount: entity.value})
						break;
					case 'date':
						handleDateChange(new Date(entity.value) ?? new Date())
						break;
					default:
						return;
				}
			})
			if(segment.isFinal) {
				if(validateForm()) {
					handleSubmit()
				}
				segment.words = []
				setState({
					name: '',
					type: 'income',
					amount: '',
				});
			} 
		}
	// eslint-disable-next-line
	}, [segment])

	return (
		<FormWrapper isOpen={isOpen || segment?.words?.length > 0}>
			<Subtitle>New Transaction</Subtitle>
			<p>
				{segment && segment.words.map(word => word.value).join(' ')}
			</p>
			<StyledForm onSubmit={handleSubmit}>
				{loading && <Loader />}
				{error && <Message error>{error}</Message>}
				<div style={{ width: '15rem' }}>
					<DatePicker
						selected={startDate}
						showMonthYearPicker
						onChange={handleDateChange}
						dateFormat='MMMM, y'
					/>
				</div>
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type='name'
							required
							name='name'
							value={state.name}
							onChange={handleChange}
							placeholder='Name'
						/>
					}
				/>
				<RadioWrapper>
					<RadioField isSelected={state.type === 'income'}>
						<input
							type='radio'
							id='income'
							name='type'
							value='income'
							checked={state.type === 'income'}
							onChange={handleChange}
						/>
						<label htmlFor='income'>Income</label>
					</RadioField>
					<RadioField isSelected={state.type === 'expense'}>
						<input
							type='radio'
							id='expense'
							name='type'
							value='expense'
							checked={state.type === 'expense'}
							onChange={handleChange}
						/>
						<label htmlFor='expense'>Expense</label>
					</RadioField>
				</RadioWrapper>
				<InputField
					icon={<BiMoney />}
					input={
						<input
							type='amount'
							required
							name='amount'
							value={state.amount}
							onChange={handleChange}
							placeholder='Amount'
						/>
					}
				/>
				<AuthBtn medium type='submit' disabled={!validateForm()}>
					Add
				</AuthBtn>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
