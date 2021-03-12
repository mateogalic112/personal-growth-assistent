const BASE = 'https://newsapi.org';
const API_KEY = '79a2b4c9a092459aaca2754438e92912';

export const newsQuery = async (param) => {
	const deafultNewsUrl = `${BASE}/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=20`;
	const queryNewsUrl = `${BASE}/v2/everything?q=${param}&apiKey=${API_KEY}&pageSize=20`;

	const url = param === '' ? deafultNewsUrl : queryNewsUrl;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Ups, something went wrong.');
	}

	return response.json();
};
