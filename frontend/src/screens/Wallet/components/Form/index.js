import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createTransaction } from '../../../../redux/actions/transactionActions';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';
import Loader from '../../../../components/Loader';
import Message from '../../../../components/Message';

import { RiFilePaper2Line } from 'react-icons/ri';
import { HiAtSymbol } from 'react-icons/hi';
import { BiMoney } from 'react-icons/bi';

import { FormWrapper, StyledForm } from './style';
import Subtitle from '../../../../components/Subtitle';

const Form = ({ isOpen }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const [state, setState] = useState({
		name: '',
		type: '',
		amount: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			createTransaction(
				state.name,
				state.type,
				state.amount,
				userInfo.token
			)
		);
	};

	const { loading, error, success } = useSelector(
		(state) => state.createTransaction
	);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		return (
			state.name.length > 2 &&
			state.type.length > 2 &&
			state.amount.length > 0
		);
	};

	return (
		<FormWrapper isOpen={isOpen}>
			<Subtitle>New Transaction</Subtitle>
			<StyledForm onSubmit={handleSubmit}>
				{loading && <Loader />}
				{error && <Message error>{error}</Message>}
				<InputField
					big
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
				<InputField
					big
					icon={<HiAtSymbol />}
					input={
						<input
							type='type'
							required
							name='type'
							value={state.type}
							onChange={handleChange}
							placeholder='Type'
						/>
					}
				/>
				<InputField
					big
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
				<AuthBtn type='submit' disabled={!validateForm()}>
					Add
				</AuthBtn>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
