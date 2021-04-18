import {useState, useEffect} from 'react';

import { useQuery } from 'react-query';
import { recipeQuery } from '../../api/food';

import FoodGrid from '../../layout/Grid/FoodGrid'
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import TitleBar from '../../components/TitleBar';
import Title from '../../components/TitleBar/Title';
import Container from '../../layout/Container';
import Filter from '../../widgets/Filter';
import Form from './components/Form'
import {LoadMoreBtn} from '../../theme/Button'

import RecipeArticle from './components/RecipeArticle'


import RecipeList from './components/RecipeList';

const Health = () => {
	const [recipes, setRecipes] = useState([]);
	const [recipeLimit, setRecipeLimit] = useState(10);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [queryString, setQueryString] = useState('chicken');
	// Getting List of recipes by query string
	const { data, error, isLoading, isError } = useQuery(
		['food', queryString],
		() => recipeQuery(queryString)
	);
	console.log(data);

	useEffect(() => {
		if (!isLoading) {
			setRecipes(data.hits);
			setRecipeLimit(10);
		}
	}, [data, isLoading]);

	const toggleFilter = () => {
		setIsFilterOpen((filterState) => !filterState);
	};

	const loadMore = () => {
		setRecipeLimit((prevLimit) => prevLimit + 5);
	};

	if (isLoading) return <Loader />;

	if (isError) return <Message error>{error}</Message>

	return (
		<Container>
			<TitleBar>
				<Title>Health</Title>
				<Filter openFilter={toggleFilter} />
			</TitleBar>
			<Form isOpen={isFilterOpen} />
			{data?.q.length > 0 && <h1>{`Recipes for "${data?.q}"`}</h1>}
			<RecipeList recipes={recipes.slice(0,5)} />
			<FoodGrid>
				{Array.isArray(recipes) &&
					recipes.length > 5 &&
					recipes
						.slice(5, recipeLimit)
						.map((item) => (
							<RecipeArticle
								key={item.recipe.uri}
								recipe={item.recipe}
							/>
						))}
			</FoodGrid>
			{recipeLimit < recipes.length && (
				<LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
			)}
		</Container>
	);
};

export default Health;
