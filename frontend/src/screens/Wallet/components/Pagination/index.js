import React from 'react';

import { PaginationContainer, Page } from './style';

const Pagination = ({ pages, currPage, setCurrentPage }) => {

	if (pages < 2) return null;

	return (
		<PaginationContainer>
			{pages.map((page) => (
				<Page
					key={page}
					active={page + 1 === currPage}
					onClick={() => setCurrentPage(page + 1)}
				>
					{page + 1}
				</Page>
			))}
		</PaginationContainer>
	);
};

export default Pagination;
