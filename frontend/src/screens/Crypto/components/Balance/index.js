import {
	BalanceModal,
	BalanceOverview,
	BalanceLabel,
	BalanceValue,
	BalanceIcon,
	BalanceSheet,
	Percentage,
	AccountLabel,
	AccountValue,
} from './style';

import { BsArrowUpRight } from 'react-icons/bs';
import { BsArrowDownRight } from 'react-icons/bs';

const currencyFormatter = require('currency-formatter');

const Balance = ({ invested, balance }) => {
	const profit = balance - invested;
	const profitPercentage = (balance / invested) * 100;
	return (
		<BalanceModal profit={profit}>
			<BalanceOverview>
				<AccountLabel>Portfolio Balance</AccountLabel>
				<AccountValue>
					{currencyFormatter.format(balance, {
						code: 'USD',
					})}{' '}
					<Percentage profit={profit}>
						{parseFloat(profitPercentage).toFixed(2)}%
					</Percentage>
					<BalanceIcon green={profit > 0}>
						{profit > 0 ? <BsArrowUpRight /> : <BsArrowDownRight />}
					</BalanceIcon>
				</AccountValue>
			</BalanceOverview>
			<BalanceSheet>
				<BalanceLabel>Invested</BalanceLabel>
				<BalanceValue>
					{currencyFormatter.format(invested, {
						code: 'USD',
					})}
				</BalanceValue>
				<BalanceLabel>Profit</BalanceLabel>
				<BalanceValue>
					{currencyFormatter.format(profit, {
						code: 'USD',
					})}
				</BalanceValue>
			</BalanceSheet>
		</BalanceModal>
	);
};

export default Balance;
