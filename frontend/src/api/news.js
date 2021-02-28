const API_KEY = '79a2b4c9a092459aaca2754438e92912';

export const getLatestNews = async () => {
	const response = await fetch(
		'https://newsapi.org/v2/top-headlines?country=us&apiKey=79a2b4c9a092459aaca2754438e92912'
	);

	if (!response.ok) {
		throw new Error('Ups, something went wrong.');
	}

	return response.json();
};
