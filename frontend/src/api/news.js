const BASE = 'https://newsapi.org';

export const newsQuery = async (param) => {
	const deafultNewsUrl = `${BASE}/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=20`;
	const queryNewsUrl = `${BASE}/v2/everything?q=${param}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=20`;

	const url = param === '' ? deafultNewsUrl : queryNewsUrl;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Ups, something went wrong.');
	}

	return response.json();
};
