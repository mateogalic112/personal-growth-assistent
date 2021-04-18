const BASE = 'https://api.edamam.com';

const FOOD_APP_ID = 'f37b5ab2';
const FOOD_APP_KEY = '0761c45685f6b6d7168024ece578b912';

export const recipeQuery = async (queryString) => {
	const url = `${BASE}/search?q=${queryString}&app_id=${FOOD_APP_ID}&app_key=${FOOD_APP_KEY}&from=0&to=30`;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Ups, something went wrong.');
	}

	return response.json();
};
