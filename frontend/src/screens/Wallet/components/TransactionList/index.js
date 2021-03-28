import React from 'react';
import Subtitle from '../../../../components/Subtitle';

import TitleBar from '../../../../components/TitleBar';
import Card from './Card';

const TransactionList = ({ transactions }) => {
	console.log(transactions);

	return (
		<>
			<TitleBar>
				<Subtitle>Choose month:</Subtitle>
				<h3>Month placeholder</h3>
			</TitleBar>
			{Array.isArray(transactions) &&
				transactions.length &&
				transactions.map((transaction) => (
					<Card transaction={transaction} key={transaction._id} />
				))}
		</>
	);
};

export default TransactionList;
