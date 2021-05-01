import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTransactions } from '../../redux/actions/transactionActions';

import { useQuery } from 'react-query';
import { cryptoQuery } from '../../api/crypto';

import { cryptoPortfolio, cryptoTransactions, setPortfolioCoinObjects, currentBalance } from './helpers/cryptoCalculations';

import Container from '../../layout/Container';
import Title from '../../components/TitleBar/Title';
import TitleBar from '../../components/TitleBar';
import Add from '../../widgets/Add';
import Card from './components/Card';
import Table from './components/Table';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import CryptoGrid from '../../layout/Grid/CryptoGrid';
import Subtitle from '../../components/Subtitle';
import Balance from './components/Balance';

import Form from './components/Form';

const Crypto = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	// Open and close form
	const [isFormOpen, setIsFormOpen] = useState(false);

	const openForm = () => {
		setIsFormOpen((isFormOpen) => !isFormOpen);
	};

	// Getting list of transactions
	const {
		loading: loadingTransaction,
		error: errorTransactions,
		transactions,
	} = useSelector((state) => state.transactionList);

	useEffect(() => {
		dispatch(listTransactions(userInfo.token));
	}, [dispatch, userInfo.token]);

	// Current portfolio state ( Coin amount )
	const portfolioCoinsAmount = useMemo(() => cryptoPortfolio(transactions), [transactions]);

	// Total Invested
	const invested = useMemo(() => cryptoTransactions(transactions, 'expense'), [transactions]);

	// Total Sold
	const sold = useMemo(() => cryptoTransactions(transactions, 'income'), [transactions]);

	// Getting Cryptocurrencies for trading
	const { data, error, isLoading, isError } = useQuery(
		['crypto', 'usd'],
		() => cryptoQuery('usd')
	);

	// Coin object for display on card
	const [portfolioCoins, setPortfolioCoins] = useState([]);

	// Current balace
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		if (!isLoading && !isError && data.length) {
			setPortfolioCoins(setPortfolioCoinObjects(data, portfolioCoinsAmount));
		}
	}, [isLoading, isError, data, portfolioCoinsAmount]);

	useEffect(() => {
		setBalance(currentBalance(portfolioCoins));
	}, [portfolioCoins]);

	if (isLoading) return <Loader />;

	if (isError) return <h1>{error}</h1>;

	return (
		<Container>
			<TitleBar>
				<Title>Cryptocurrency</Title>
				<Add handleClick={openForm} />
			</TitleBar>
			<Form isOpen={isFormOpen} coins={data} portfolioCoins={portfolioCoins} />
			<Subtitle>Portfolio</Subtitle>
			<CryptoGrid>
				{loadingTransaction ? (
					<Loader />
				) : errorTransactions ? (
					<Message error>{error}</Message>
				) : (
					<Balance invested={invested} balance={balance} sold={sold} />
				)}

				{Array.isArray(portfolioCoins) &&
					portfolioCoins.map((coin) => (
						<Card key={coin.id} {...coin} />
					))}
				<Table portfolioCoins={portfolioCoins} balance={balance} />
			</CryptoGrid>
		</Container>
	);
};

export default Crypto;
