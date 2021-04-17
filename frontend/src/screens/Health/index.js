import {useState} from 'react';

import { useQuery } from 'react-query';
import { recipeQuery } from '../../api/food';

import Loader from '../../components/Loader';
import Message from '../../components/Message';
import TitleBar from '../../components/TitleBar';
import Title from '../../components/TitleBar/Title';
import Container from '../../layout/Container';
import Filter from '../../widgets/Filter';
import NewsFilter from '../News/components/NewsFilter';


import RecipeList from './components/RecipeList';

const Health = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [queryString, setQueryString] = useState('chicken');
	// Getting List of recipes by query string
	const { data, error, isLoading, isError } = useQuery(
		['food', queryString],
		() => recipeQuery(queryString)
	);
	console.log(data);

	const toggleFilter = () => {
		setIsFilterOpen((filterState) => !filterState);
	};

	if (isLoading) return <Loader />;

	if (isError) return <Message error>{error}</Message>

	return (
		<Container>
			<TitleBar>
				<Title>Health</Title>
				<Filter openFilter={toggleFilter} />
			</TitleBar>
			<NewsFilter active={isFilterOpen} setQueryString={setQueryString} />
			<RecipeList recipeQueryResponse={data} />
		</Container>
	);
};

export default Health;
