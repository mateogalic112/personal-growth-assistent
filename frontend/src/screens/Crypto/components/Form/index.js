import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createTransaction } from '../../../../redux/actions/transactionActions';

import Select from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';
import { selectStyles } from '../../../Register/style';

import InputField from '../../../../components/InputField';
import { AuthBtn } from '../../../../theme/Button';
import Loader from '../../../../components/Loader';
import Message from '../../../../components/Message';

import { BiDollar } from 'react-icons/bi';

import { FormWrapper, StyledForm } from './style';
import Subtitle from '../../../../components/Subtitle';
import { RadioField, RadioWrapper } from '../../../Register/style';

const Form = ({ isOpen, coins }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const [selectedCoin, setSelectedCoin] = useState(null);

	const selectedCoinAmount = () => {
		if (selectedCoin && parseFloat(state.amount) > 0) {
			return parseFloat(
				state.amount / selectedCoin.value.current_price
			).toFixed(8);
		}
		return 0;
	};

	const [state, setState] = useState({
		type: 'expense',
		amount: '',
	});

	const selectCoinsOptions = coins.map((coin) => ({
		value: coin,
		label: coin.name,
	}));

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			createTransaction(
				selectedCoin?.value?.id,
				state.type,
				state.amount,
				new Date(),
				true,
				selectedCoinAmount(),
				selectedCoin?.value?.current_price,
				userInfo.token
			)
		);
		setState({
			selectedCoin: null,
			type: 'expense',
			amount: '',
		});
	};

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		return selectedCoin && parseFloat(state.amount) > 0;
	};

	const { loading, error } = useSelector((state) => state.createTransaction);

	return (
		<FormWrapper isOpen={isOpen}>
			<Subtitle>New Transaction</Subtitle>
			<StyledForm onSubmit={handleSubmit}>
				{loading && <Loader />}
				{error && <Message error>{error}</Message>}
				<div style={{ width: '320px' }}>
					<Select
						menuPortalTarget={document.body}
						menuPosition={'fixed'}
						placeholder='Select Coin'
						value={selectedCoin}
						onChange={setSelectedCoin}
						styles={selectStyles}
						options={selectCoinsOptions}
					/>
				</div>
				<RadioWrapper>
					<RadioField isSelected={state.type === 'expense'}>
						<input
							type='radio'
							id='expense'
							name='type'
							value='expense'
							checked={state.type === 'expense'}
							onChange={handleChange}
						/>
						<label htmlFor='expense'>Buy</label>
					</RadioField>
					<RadioField isSelected={state.type === 'income'}>
						<input
							type='radio'
							id='income'
							name='type'
							value='income'
							checked={state.type === 'income'}
							onChange={handleChange}
						/>
						<label htmlFor='income'>Sell</label>
					</RadioField>
				</RadioWrapper>
				<InputField
					icon={<BiDollar />}
					input={
						<input
							type='amount'
							required
							name='amount'
							value={state.amount}
							onChange={handleChange}
							placeholder='Amount'
							autoComplete='off'
						/>
					}
				/>

				{selectedCoinAmount() > 0 && (
					<h3>
						<span>Total: </span>
						{selectedCoinAmount()}{' '}
						{selectedCoin?.value?.symbol.toUpperCase()}
					</h3>
				)}

				<AuthBtn medium type='submit' disabled={!validateForm()}>
					Add
				</AuthBtn>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
