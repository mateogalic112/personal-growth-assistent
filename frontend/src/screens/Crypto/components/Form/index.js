import { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createTransaction } from '../../../../redux/actions/transactionActions';

import { useSpeechContext } from '@speechly/react-client';

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

const Form = ({ isOpen, coins, portfolioCoins }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { segment } = useSpeechContext();

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

	const setSelectedCoinBySpeech = (coinName) => {
		const selectedCoinBySpeech = selectCoinsOptions.find(
			(coin) => coin.label.toLowerCase() === coinName
		);
		if (selectedCoinBySpeech) {
			setSelectedCoin(selectedCoinBySpeech);
		}
	};

	const handleSubmit = useCallback(
		async (e) => {
			if (e) {
				e.preventDefault();
			}
			dispatch(
				createTransaction(
					selectedCoin?.value?.id,
					state.type,
					state.amount,
					userInfo.token,
					new Date(),
					true,
					selectedCoinAmount(),
					selectedCoin?.value?.current_price
				)
			);
			setState({
				selectedCoin: null,
				type: 'expense',
				amount: '',
			});
		},
		// eslint-disable-next-line
		[
			dispatch,
			selectedCoin?.value?.current_price,
			selectedCoin?.value?.id,
			state.amount,
			state.type,
			userInfo.token,
		]
	);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const validateTransactionAmount = () => {
		const portfolioCoin = portfolioCoins.find(
			(coin) => coin.name === selectedCoin.label
		);
		if (!portfolioCoin && state.type === 'income') return false;
		if (portfolioCoin && state.type === 'income')
			return (
				portfolioCoin.current_price * portfolioCoin.portfolioAmount >=
				state.amount
			);
		return true;
	};

	const validateForm = useCallback(() => {
		return (
			selectedCoin &&
			parseFloat(state.amount) > 0 &&
			validateTransactionAmount()
		);
		// eslint-disable-next-line
	}, [selectedCoin, state.amount]);

	useEffect(() => {
		if (segment) {
			if (segment.intent.intent === 'income_transaction') {
				setState({ ...state, type: 'income' });
			} else if (segment.intent.intent === 'expense_transaction') {
				setState({ ...state, type: 'expense' });
			}
			segment.entities.forEach((entity) => {
				switch (entity.type) {
					case 'item':
						setSelectedCoinBySpeech(entity.value.toLowerCase());
						break;
					case 'amount':
						setState({ ...state, amount: entity.value });
						break;
					default:
						return;
				}
			});
			if (segment.isFinal) {
				if (validateForm()) {
					handleSubmit();
				}
				segment.words = [];
			}
		}
		// eslint-disable-next-line
	}, [segment]);

	const { loading, error } = useSelector((state) => state.createTransaction);

	return (
		<FormWrapper isOpen={isOpen || segment?.words?.length > 0}>
			<Subtitle>New Transaction</Subtitle>
			<p>
				{segment && segment.words.map((word) => word.value).join(' ')}
			</p>
			<StyledForm onSubmit={handleSubmit}>
				{loading && <Loader />}
				{error && <Message error>{error}</Message>}
				<div style={{ width: '15rem' }}>
					<Select
						menuPortalTarget={document.body}
						menuPosition={'fixed'}
						placeholder="Select Coin"
						value={selectedCoin}
						onChange={setSelectedCoin}
						styles={selectStyles}
						options={selectCoinsOptions}
					/>
				</div>
				<RadioWrapper>
					<RadioField isSelected={state.type === 'expense'}>
						<input
							type="radio"
							id="expense"
							name="type"
							value="expense"
							checked={state.type === 'expense'}
							onChange={handleChange}
						/>
						<label htmlFor="expense">Buy</label>
					</RadioField>
					<RadioField isSelected={state.type === 'income'}>
						<input
							type="radio"
							id="income"
							name="type"
							value="income"
							checked={state.type === 'income'}
							onChange={handleChange}
						/>
						<label htmlFor="income">Sell</label>
					</RadioField>
				</RadioWrapper>
				<InputField
					icon={<BiDollar />}
					input={
						<input
							type="amount"
							required
							name="amount"
							value={state.amount}
							onChange={handleChange}
							placeholder="Amount"
							autoComplete="off"
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

				<AuthBtn medium type="submit" disabled={!validateForm()}>
					Add
				</AuthBtn>
			</StyledForm>
		</FormWrapper>
	);
};

export default Form;
