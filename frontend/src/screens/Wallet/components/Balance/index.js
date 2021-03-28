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

const Balance = ({ expenses, income }) => {
	const difference = income - expenses;
	return (
		<BalanceModal profit={difference}>
			<BalanceOverview>
				<AccountLabel>Available Budget</AccountLabel>
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
					{currencyFormatter.format(expenses, {
						code: 'USD',
					})}
				</BalanceValue>
			</BalanceSheet>
		</BalanceModal>
	);
};

export default Balance;
