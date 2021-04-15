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

import { validCoins, coinsAllocation } from '../../helpers/cryptoCalculations'

const currencyFormatter = require('currency-formatter');

const Table = ({ portfolioCoins, balance }) => {
	const coins = coinsAllocation(validCoins(portfolioCoins), balance);

	return (
		<TableContainer>
			<TableRow>
				<Title>Coin</Title>
				<Allocation>Allocation</Allocation>
				<Amount>Amount</Amount>
				<Value>Value</Value>
			</TableRow>
			{coins.map((coin) => (
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
						{parseFloat(coin.portfolioAmount).toFixed(5)} {coin.symbol.toUpperCase()}
					</Amount>
					<Value>
						{currencyFormatter.format(
							coin.current_price * coin.portfolioAmount,
							{
								code: 'USD',
							}
						)}
					</Value>
				</TableCoinRow>
			))}
		</TableContainer>
	);
};

export default Table;
