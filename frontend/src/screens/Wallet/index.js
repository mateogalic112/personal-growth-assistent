import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { listTransactions } from '../../actions/transactionActions';

import Container from '../../layout/Container';
import Title from '../../components/TitleBar/Title';
import TitleBar from '../../components/TitleBar';
import Balance from './components/Balance';
import Subtitle from '../../components/Subtitle';
import Filter from '../../widgets/Filter';
import WalletGrid from '../../layout/Grid/WalletGrid';
import TransactionList from './components/TransactionList';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const Wallet = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	useEffect(() => {
		dispatch(listTransactions(userInfo.token));
	}, [dispatch, userInfo.token]);

	const { loading, error, transactions } = useSelector(
		(state) => state.transactionList
	);

	//TODO This will come from db
	const expenses = 3000;
	const income = 5000;

	if (loading) return <Loader />;

	if (error) return <Message error={error} />;

	return (
		<Container>
			<TitleBar>
				<Title>Wallet</Title>
				<Filter openFilter={() => {}} />
			</TitleBar>
			<Subtitle>This Month</Subtitle>
			<WalletGrid>
				<Balance expenses={expenses} income={income} />
				<TransactionList transactions={transactions} />
			</WalletGrid>
		</Container>
	);
};

export default Wallet;
