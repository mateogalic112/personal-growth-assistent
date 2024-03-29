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

const Balance = ({ invested, balance, sold }) => {
	const profit = (balance + sold) - invested;
	const profitPercentage =
		profit > 0
			? parseFloat(balance / invested).toFixed(5)
			: parseFloat(invested / balance).toFixed(5);

	return (
		<BalanceModal profit={profit}>
			<BalanceOverview>
				<AccountLabel>Portfolio Balance</AccountLabel>
				<AccountValue>
					{currencyFormatter.format(balance, {
						code: 'USD',
					})}{' '}
					{
						balance !== 0 && (
							<>
								<Percentage profit={profit}>
									{parseFloat(profitPercentage || 0).toFixed(5)}%
								</Percentage>
								<BalanceIcon green={profit > 0}>
									{profit > 0 ? <BsArrowUpRight /> : <BsArrowDownRight />}
								</BalanceIcon>
							</>
						)
					}
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
