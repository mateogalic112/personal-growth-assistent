import { useState, useEffect } from 'react'

import Card from '../Card'
import Pagination from '../../../../components/Pagination'

import { GoalListContainer } from './style'

import { months } from '../../../../constants';

const PER_PAGE = 5;

export default function GoalList({ goals, children, date }) {
	const [filteredGoals, setFilteredGoals] = useState(
		goals
	);

	useEffect(() => {
		const transactionFilter = (date) => {
			const filterDate = `${date.getDate()}-${date.getMonth()}-${date.getYear()}`;
			const filteredByDate = goals.filter((goal) => {
				const goalDate = `${new Date(goal.date).getDate()}-${new Date(goal.date).getMonth()}-${new Date(
					goal.date
				).getYear()}`;
				if (goalDate === filterDate) return true;
				return false;
			});
			setFilteredGoals(filteredByDate);
			setPages(
				Math.ceil(filteredByDate.length / PER_PAGE)
			);
		};

		transactionFilter(date);
	}, [date, goals]);

	// Pagination
	const [pages, setPages] = useState(
		Math.ceil(filteredGoals.length / PER_PAGE)
	);
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<GoalListContainer>
			{children}
			{pages > 0 && (
				<Pagination
					pages={[...Array(pages).keys()]}
					currPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
			{Array.isArray(filteredGoals) &&
			filteredGoals.length > 0 ? (
				filteredGoals
					.slice(
						(currentPage - 1) * PER_PAGE,
						currentPage * PER_PAGE
					)
					.map((goal) => (
						<Card key={goal._id} goal={goal} />
					))
			) : (
				<h2 style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
					No goals for{' '}
					{new Date(date).getDate()}{' '}{months[new Date(date).getUTCMonth()]},{' '}
					{new Date(date).getFullYear()}
				</h2>
			)}
		</GoalListContainer>
	)
}
