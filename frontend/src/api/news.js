const BASE = 'https://newsapi.org';
const API_KEY = '79a2b4c9a092459aaca2754438e92912';

export const newsQuery = async (param) => {
	if (param !== '') {
		return tagNews(param);
	}
	return getLatestNews();
};

export const getLatestNews = async () => {
	const response = await fetch(
		`${BASE}/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=20`
	);

	if (!response.ok) {
		throw new Error('Ups, something went wrong.');
	}

	return response.json();
};

export const tagNews = async (queryString) => {
	const response = await fetch(
		`${BASE}/v2/everything?q=${queryString}&apiKey=${API_KEY}&pageSize=20`
	);

	if (!response.ok) {
		throw new Error('Ups, something went wrong.');
	}

	return response.json();
};
