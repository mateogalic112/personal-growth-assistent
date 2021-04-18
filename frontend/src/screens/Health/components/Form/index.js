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
import { BiMoney } from 'react-icons/bi';

import { FormWrapper, StyledForm } from './style';
import Subtitle from '../../../../components/Subtitle';

const Form = ({ isOpen }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const [state, setState] = useState({
		name: '',
		type: 'income',
		amount: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setState({
			name: '',
			type: 'income',
			amount: '',
		});
	};

	const { loading, error } = useSelector((state) => state.createTransaction);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		return state.name.length > 1;
	};

	return (
		<FormWrapper isOpen={isOpen}>
			<Subtitle>Search recipes</Subtitle>
			<StyledForm onSubmit={handleSubmit}>
				{loading && <Loader />}
				{error && <Message error>{error}</Message>}
				<InputField
					icon={<RiFilePaper2Line />}
					input={
						<input
							type='name'
							required
							name='name'
							value={state.name}
							onChange={handleChange}
							placeholder='Favorite Food'
						/>
					}
				/>
			
				<InputField
					icon={<BiMoney />}
					input={
						<input
							type='calories'
							required
							name='calories'
							value={state.calories}
							onChange={handleChange}
							placeholder='Wanted Calories'
						/>
					}
				/>
				<AuthBtn medium type='submit' disabled={!validateForm()}>
					Search
				</AuthBtn>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
