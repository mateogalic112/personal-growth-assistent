/**
 * Retrieving coins with amount from transactions
 * @param {array} transactions Array of crypto transactions
 * 
 * @return {array}
 */
export const cryptoPortfolio = (transactions) => {
	const portfolioCoins = {};

	transactions
		.filter((transaction) => transaction.isCrypto)
		.forEach((transaction) => {
			if (portfolioCoins[transaction.name] === undefined) {
				portfolioCoins[transaction.name] = {
					cryptoQty: transaction.cryptoQty,
				};
			} else {
				if (transaction.type === 'expense') {
					portfolioCoins[transaction.name].cryptoQty +=
						transaction.cryptoQty;
				} else {
					portfolioCoins[transaction.name].cryptoQty -=
						transaction.cryptoQty;
				}
			}
		});

	return portfolioCoins;
};

/**
 * Reducing transactions based on type ( invested, sold )
 * @param {array}  transactions    Array of crypto transactions
 * @param {string} transactionType Type of transaction
 * 
 * @return {int}
 */
export const cryptoTransactions = (transactions, transactionType) =>
		transactions
		.filter(
			(transaction) =>
				transaction.isCrypto && transaction.type === transactionType
		)
		.reduce((acc, transaction) => acc + transaction.amount, 0);

/**
 * Returning array with coin objects
 * @param {array}  data                  List of all API coins
 * @param {string} currentPortfolioState List of coins in portfolio
 * 
 * @return {array}
 */
export const setPortfolioCoinObjects = (data, currentPortfolioState) => 
		data
		.filter((coin) => coin.id in currentPortfolioState)
		.map((object) => ({
			...object,
			portfolioAmount: currentPortfolioState[object.id].cryptoQty,
}))

/**
 * Return current balance
 * @param {array}  portfolioCoins Array of coin objects in portfolio
 * 
 * @return {int}
 */
 export const currentBalance = portfolioCoins =>
	portfolioCoins.reduce(
		(acc, coin) => acc + coin.portfolioAmount * coin.current_price,
		0
	)

/**
 * Return coins that are currently in portfolio
 * @param {array}  portfolioCoins Array of coin objects in all-time portfolio
 * 
 * @return {array}
 */
export const currentPortfolioCoins = portfolioCoins => 
	portfolioCoins
	.filter((coin) => coin.portfolioAmount > 0)


/**
 * Return coins that are currently in portfolio with allocation property
 * @param {array}  portfolioCoins Array of coin objects current in portfolio
 * @param {int}    balance        Current usd balance
 * 
 * @return {array}
 */
export const coinsAllocation = (coins, balance) => 
	coins
		.map((coin) => ({
		...coin,
		allocation: parseFloat(
			((coin.portfolioAmount * coin.current_price) / balance) * 100
		).toFixed(2),
	}));
