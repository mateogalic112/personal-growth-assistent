import {
	TableContainer,
	TableRow,
	Title,
	Allocation,
	Amount,
	Value,
	TableCoinRow,
	Icon,
} from './style';

const currencyFormatter = require('currency-formatter');

const Table = ({ portfolioCoins, balance }) => {
	const displayValidCoins = portfolioCoins
		.filter((coin) => coin.portfolioAmount > 0)
		.map((coin) => ({
			...coin,
			allocation: parseFloat(
				((coin.portfolioAmount * coin.current_price) / balance) * 100
			).toFixed(2),
		}));
	return (
		<TableContainer>
			<TableRow>
				<Title>Coin</Title>
				<Allocation>Allocation</Allocation>
				<Amount>Amount</Amount>
				<Value>Value</Value>
			</TableRow>
			{displayValidCoins.map((coin) => (
				<TableCoinRow key={coin.id}>
					<Title>
						<Icon src={coin.image} />
						{coin.name}
					</Title>
					<Allocation>
						<label htmlFor='coin'>{coin.allocation}%</label>
						<progress id='coin' value={coin.allocation} max='100' />
					</Allocation>
					<Amount>
						{coin.portfolioAmount} {coin.symbol.toUpperCase()}
					</Amount>
					<Value>
						{currencyFormatter.format(coin.current_price, {
							code: 'USD',
						})}
					</Value>
				</TableCoinRow>
			))}
		</TableContainer>
	);
};

export default Table;
