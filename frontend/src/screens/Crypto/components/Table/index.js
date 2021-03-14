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

import Subtitle from '../../../../components/Subtitle';

const currencyFormatter = require('currency-formatter');

const Table = ({ portfolioCoins }) => {
	const displayValidCoins = portfolioCoins.filter(
		(coin) => coin.portfolioAmount > 0
	);
	return (
		<TableContainer>
			<Subtitle>Coins</Subtitle>
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
						<label htmlFor='coin'>10%</label>
						<progress id='coin' value={1} max='100' />
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
