const BASE = 'https://newsapi.org';

export const newsQuery = async (param) => {
	const queryNewsUrl = `${BASE}/v2/everything?q=${param}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=20`;

	const response = await fetch(queryNewsUrl);

	if (!response.ok) {
		throw new Error('Ups, something went wrong.');
	}

	return response.json();
};
