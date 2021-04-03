import { useMemo } from 'react';

import {
	BalanceModal,
	BalanceOverview,
	BalanceLabel,
	BalanceValue,
	BalanceSheet,
	AccountLabel,
	AccountValue,
} from './style';

const currencyFormatter = require('currency-formatter');

const Balance = ({ transactions, title }) => {
	const { income, expense } = useMemo(
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
	const difference = income - expense;

	return (
		<BalanceModal profit={difference}>
			<BalanceOverview>
				<AccountLabel>
					{title ? title : 'Available Budget'}
				</AccountLabel>
				<AccountValue>
					{currencyFormatter.format(difference, {
						code: 'USD',
					})}
				</AccountValue>
			</BalanceOverview>
			<BalanceSheet>
				<BalanceLabel>Income</BalanceLabel>
				<BalanceValue>
					{currencyFormatter.format(income, {
						code: 'USD',
					})}
				</BalanceValue>
				<BalanceLabel>Expenses</BalanceLabel>
				<BalanceValue>
					{currencyFormatter.format(expense, {
						code: 'USD',
					})}
				</BalanceValue>
			</BalanceSheet>
		</BalanceModal>
	);
};

export default Balance;
