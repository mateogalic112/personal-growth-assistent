const BASE = 'https://api.coingecko.com/api/v3';

export const cryptoQuery = async (currency, per_page = 10) => {
	const url = `${BASE}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${per_page}&page=1&sparkline=false
    `;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Ups, something went wrong.');
	}

	return response.json();
};
