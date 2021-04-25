import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createTransaction } from '../../../../redux/actions/transactionActions';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';
import Loader from '../../../../components/Loader';
import Message from '../../../../components/Message';

import { RiFilePaper2Line } from 'react-icons/ri';

import { FormWrapper, StyledForm } from './style';

const Form = ({ isOpen }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const [state, setState] = useState({
		name: '',
		type: 'income',
		amount: '',
	});

	const [startDate, setStartDate] = useState(new Date());

	const handleDateChange = (date) => {
		setStartDate(date);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
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
	};

	const { loading, error } = useSelector((state) => state.createTransaction);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		return state.name.length > 1 && parseFloat(state.amount) > 0;
	};

	return (
		<FormWrapper isOpen={isOpen}>
			<StyledForm onSubmit={handleSubmit}>
				{loading && <Loader />}
				{error && <Message error>{error}</Message>}
				<div style={{ width: '320px' }}>
					<DatePicker
						selected={startDate}
						showMonthYearPicker
						onChange={handleDateChange}
						dateFormat='dd MMMM, y'
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
							placeholder='Note'
						/>
					}
				/>
				<AuthBtn medium type='submit' disabled={!validateForm()}>
					Add Note
				</AuthBtn>
				<div style={{marginBottom: '1rem'}}></div>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
