import { useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { listTransactions } from '../../redux/actions/transactionActions';

import Container from '../../layout/Container';
import Title from '../../components/TitleBar/Title';
import TitleBar from '../../components/TitleBar';
import Balance from './components/Balance';
import Subtitle from '../../components/Subtitle';
import Add from '../../widgets/Add';
import WalletGrid from '../../layout/Grid/WalletGrid';
import TransactionList from './components/TransactionList';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Form from './components/Form';

const Wallet = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const [isFormOpen, setIsFormOpen] = useState(false);

	const openForm = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};

	useEffect(() => {
		dispatch(listTransactions(userInfo.token));
	}, [dispatch, userInfo.token]);

	const { loading, error, transactions } = useSelector(
		(state) => state.transactionList
	);

	const transactionTypeValues = useMemo(
		() =>
			transactions.reduce(
				(acc, item) => {
					acc[item.type] = (acc[item.type] || 0) + item.amount;
					return acc;
				},
				{ income: 0, expense: 0 }
			),
		[transactions]
	);

	if (loading) return <Loader />;

	if (error) return <Message error={error} />;

	return (
		<Container>
			<TitleBar>
				<Title>Wallet</Title>
				<Add handleClick={openForm} />
			</TitleBar>
			<Form isOpen={isFormOpen} />
			<Subtitle>This Month</Subtitle>
			<WalletGrid>
				<Balance
					income={transactionTypeValues.income ?? 0}
					expenses={transactionTypeValues.expense ?? 0}
				/>
				<TransactionList transactions={transactions} />
			</WalletGrid>
		</Container>
	);
};

export default Wallet;
