const BASE = 'https://newsapi.org';

export const newsQuery = async (param) => {
	const queryNewsUrl = `${BASE}/v2/everything?q=${param}&apiKey=79a2b4c9a092459aaca2754438e92912&pageSize=20`;

	const response = await fetch(queryNewsUrl);

	if (!response.ok) {
		throw new Error('Ups, something went wrong.');
	}

	return response.json();
};
