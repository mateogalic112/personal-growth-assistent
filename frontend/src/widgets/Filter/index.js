import React from 'react';

import { BsFilterRight } from 'react-icons/bs';

import { FilterIcon, Text, FilterContainer } from './style';

const Filter = () => {
	return (
		<FilterContainer>
			<Text>Filters</Text>
			<FilterIcon>
				<BsFilterRight />
			</FilterIcon>
		</FilterContainer>
	);
};

export default Filter;
