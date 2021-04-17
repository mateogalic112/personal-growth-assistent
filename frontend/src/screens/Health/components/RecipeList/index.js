import React from 'react';

import RecipeCard from '../RecipeCard';

const RecipeList = ({ recipeQueryResponse }) => {
	return (
		<div>
			<h1>{`Recipes for ${recipeQueryResponse.q}`}</h1>
			{recipeQueryResponse.hits.map((hit, i) => (
				<RecipeCard recipe={hit.recipe} key={i} />
			))}
		</div>
	);
};

export default RecipeList;
