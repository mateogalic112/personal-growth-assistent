import { useState, useEffect } from 'react';

import { useQuery } from 'react-query';

import { cryptoQuery } from '../../api/crypto';

import Container from '../../layout/Container';

import Title from '../../components/TitleBar/Title';
import TitleBar from '../../components/TitleBar';
import Filter from '../../widgets/Filter';
import Card from './components/Card';
import Graph from './components/Graph';
import Table from './components/Table';

import CryptoGrid from '../../layout/Grid/CryptoGrid';
import Subtitle from '../../components/Subtitle';
import Balance from './components/Balance';

const Crypto = () => {
	const { data, error, isLoading, isError } = useQuery(
		['crypto', 'usd'],
		() => cryptoQuery('usd')
	);

	const [balance, setBalance] = useState(null);
	const [portfolioCoins, setPortfolioCoins] = useState([]);

	//TODO This data will come from DB
	const portfolio = {
		'2021-03-08': {
			bitcoin: {
				amount: 0.08,
			},
			ethereum: {
				amount: 1,
			},
			polkadot: {
				amount: 20,
			},
		},
		'2021-03-09': {
			bitcoin: {
				amount: 0.085,
			},
			ethereum: {
				amount: 1.2,
			},
			polkadot: {
				amount: 20,
			},
		},
		'2021-03-10': {
			bitcoin: {
				amount: 0.085,
			},
			ethereum: {
				amount: 1.2,
			},
			polkadot: {
				amount: 20,
			},
		},
		'2021-03-11': {
			bitcoin: {
				amount: 0.05,
			},
			ethereum: {
				amount: 0.5,
			},
			polkadot: {
				amount: 100,
			},
		},
		'2021-03-12': {
			bitcoin: {
				amount: 0.08,
			},
			ethereum: {
				amount: 1,
			},
			polkadot: {
				amount: 0,
			},
		},
		'2021-03-13': {
			bitcoin: {
				amount: 0.085,
			},
			ethereum: {
				amount: 1,
			},
			polkadot: {
				amount: 0,
			},
		},
		'2021-03-14': {
			bitcoin: {
				amount: 0.08014,
			},
			ethereum: {
				amount: 1.0086,
			},
			polkadot: {
				amount: 0,
			},
		},
	};

	useEffect(() => {
		const latestPortfolioBalanceDate =
			portfolio[
				Object.keys(portfolio)[Object.keys(portfolio).length - 1]
			];

		const portfolioCoinNames = portfolio[Object.keys(portfolio).slice(-1)];

		if (!isLoading && !isError && data.length) {
			setPortfolioCoins(
				data
					.filter((coin) => coin.id in portfolioCoinNames)
					.map((object) => ({
						...object,
						portfolioAmount:
							latestPortfolioBalanceDate[object.id].amount,
					}))
			);
		}
		//eslint-disable-next-line
	}, [isLoading, isError, data]);

	useEffect(() => {
		setBalance(
			portfolioCoins.reduce(
				(acc, coin) => acc + coin.portfolioAmount * coin.current_price,
				0
			)
		);
	}, [portfolioCoins]);

	// TODO This will come from DB
	const invested = 3000;

	if (isLoading) return <h1>Loading</h1>;

	if (isError) return <h1>{error}</h1>;

	return (
		<Container>
			<TitleBar>
				<Title>Cryptocurrency</Title>
				<Filter openFilter={() => {}} />
			</TitleBar>
			<Subtitle>Portfolio</Subtitle>
			<CryptoGrid>
				<Balance invested={invested} balance={balance} />
				{Array.isArray(portfolioCoins) &&
					portfolioCoins.map((coin) => (
						<Card key={coin.id} {...coin} />
					))}
				<Graph portfolio={portfolio} />
				<Table portfolioCoins={portfolioCoins} balance={balance} />
			</CryptoGrid>
		</Container>
	);
};

export default Crypto;
