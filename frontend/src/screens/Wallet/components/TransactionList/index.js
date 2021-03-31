import React from 'react';
import Subtitle from '../../../../components/Subtitle';

import TitleBar from '../../../../components/TitleBar';
import Card from './Card';

import { TransactionListContainer } from './style';

const TransactionList = ({ transactions }) => {
	return (
		<TransactionListContainer>
			<TitleBar>
				<Subtitle>Choose month:</Subtitle>
				<h3>Month placeholder</h3>
			</TitleBar>
			{Array.isArray(transactions) &&
				transactions.length > 0 &&
				transactions
					.reverse()
					.map((transaction) => (
						<Card transaction={transaction} key={transaction._id} />
					))}
		</TransactionListContainer>
	);
};

export default TransactionList;
