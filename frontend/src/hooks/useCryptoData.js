import { useState, useEffect } from 'react';

import { useQuery } from 'react-query';

import { getWeeklyPortfolioPrices } from '../api/crypto';

import { displayDate } from '../helper/date';

export const useCryptoData = (portfolio) => {
	const [priceData, setPriceData] = useState({});
	const [displayData, setDisplayData] = useState({ ...portfolio });

	// Get unique coins in portfolio
	const portfolioCoinsSet = new Set();
	Object.values(portfolio).map((item) =>
		Object.keys(item).map((key) => portfolioCoinsSet.add(key))
	);
	const portfolioCoins = Array.from(portfolioCoinsSet);

	const { data, error, isLoading, isError } = useQuery('crypto', () =>
		getWeeklyPortfolioPrices(portfolioCoins)
	);

	// Convert milliseconds from array to real date
	useEffect(() => {
		if (!isLoading && !isError && data?.length) {
			data.forEach((item) => {
				Object.entries(item).forEach(([key, value]) => {
					const prices = value.prices.map((priceArr) => [
						(priceArr[0] = displayDate(
							new Date(priceArr[0]).toISOString()
						)),
						priceArr[1],
					]);
					setPriceData((p) => ({ ...p, [key]: prices }));
				});
			});
		}
	}, [isError, isLoading, data, portfolio]);

	// Setting up data ovject for graph
	useEffect(() => {
		Object.entries(portfolio).forEach(([key, value]) => {
			Object.keys(value).forEach((coin) => {
				priceData[coin]?.forEach((arrItem) => {
					if (key === arrItem[0]) {
						setDisplayData((d) => ({
							...d,
							[key]: {
								...d[key],
								[coin]: {
									...d[key][coin],
									priceOfOne: arrItem[1],
								},
							},
						}));
					}
				});
			});
		});
	}, [portfolio, priceData]);

	return [displayData, error, isLoading, isError];
};
