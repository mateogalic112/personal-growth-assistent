import React from 'react';

import { useQuery } from 'react-query';
import { recipeQuery } from '../../api/food';

import Loader from '../../components/Loader';

import RecipeList from './components/RecipeList';

const Health = () => {
	// Getting List of recipes by query string
	const { data, error, isLoading, isError } = useQuery(
		['food', 'chicken'],
		() => recipeQuery('chicken')
	);
	console.log(data);
	if (isLoading) return <Loader />;
	return (
		<div>
			<RecipeList recipeQueryResponse={data} />
		</div>
	);
};

export default Health;
