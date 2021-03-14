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

const getWeeklyCoinPrices = async (coin) => {
	const url = `${BASE}/coins/${coin}/market_chart?vs_currency=usd&days=7&interval=daily`;

	const response = await fetch(url);

	if (!response.ok) {
		return [];
	}

	return { [coin]: await response.json() };
};

export const getWeeklyPortfolioPrices = async (coins) => {
	return await Promise.all(coins.map((coin) => getWeeklyCoinPrices(coin)));
};
