import { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { dateFormatter } from '../../../../helper/date';

import { months } from '../../../../constants';

import Subtitle from '../../../../components/Subtitle';
import TitleBar from '../../../../components/TitleBar';
import Card from './Card';
import Pagination from '../Pagination';

import { TransactionListContainer } from './style';
import Balance from '../Balance';

const LIMIT_DISPLAYED_TRANSACTIONS = 5;

const TransactionList = ({ transactions }) => {
	const [startDate, setStartDate] = useState(new Date());
	const [filteredTransactions, setFilteredTransactions] = useState(
		transactions
	);

	// Pagination
	const [pages, setPages] = useState(
		Math.ceil(filteredTransactions.length / LIMIT_DISPLAYED_TRANSACTIONS)
	);
	const [currentPage, setCurrentPage] = useState(1);

	const handleDateChange = (date) => {
		setStartDate(date);
	};

	useEffect(() => {
		const transactionFilter = (date) => {
			const filterDate = `${date.getMonth()}-${date.getYear()}`;
			const filteredByDate = transactions.filter((t) => {
				const tDate = `${new Date(t.date).getMonth()}-${new Date(
					t.date
				).getYear()}`;
				if (tDate === filterDate) return true;
				return false;
			});
			setFilteredTransactions(filteredByDate);
			setPages(
				Math.ceil(filteredByDate.length / LIMIT_DISPLAYED_TRANSACTIONS)
			);
		};

		transactionFilter(startDate);
	}, [startDate, transactions]);

	return (
		<TransactionListContainer>
			<div style={{ maxWidth: '500px' }}>
				<TitleBar>
					<Subtitle>Choose Month:</Subtitle>
					<div style={{ width: '240px' }}>
						<DatePicker
							selected={startDate}
							showMonthYearPicker
							onChange={handleDateChange}
							dateFormat='MMMM, y'
						/>
					</div>
				</TitleBar>

				<Balance
					transactions={filteredTransactions}
					title={`Budget for ${dateFormatter(startDate)}`}
				/>
			</div>
			{pages > 0 && (
				<Pagination
					pages={[...Array(pages).keys()]}
					currPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
			{Array.isArray(filteredTransactions) &&
			filteredTransactions.length > 0 ? (
				filteredTransactions
					.slice(
						(currentPage - 1) * LIMIT_DISPLAYED_TRANSACTIONS,
						currentPage * LIMIT_DISPLAYED_TRANSACTIONS
					)
					.map((transaction) => (
						<Card transaction={transaction} key={transaction._id} />
					))
			) : (
				<h2 style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
					No transactions for{' '}
					{months[new Date(startDate).getUTCMonth()]},{' '}
					{new Date(startDate).getFullYear()}
				</h2>
			)}
		</TransactionListContainer>
	);
};

export default TransactionList;
