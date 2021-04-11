export const cryptoPortfolio = (transactions) => {
	const cryptoPortfolio = {};

	transactions
		.filter((transaction) => transaction.isCrypto)
		.forEach((transaction) => {
			if (cryptoPortfolio[transaction.name] === undefined) {
				cryptoPortfolio[transaction.name] = {
					cryptoQty: transaction.cryptoQty,
				};
			} else {
				if (transaction.type === 'expense') {
					cryptoPortfolio[transaction.name].cryptoQty +=
						transaction.cryptoQty;
				} else {
					cryptoPortfolio[transaction.name].cryptoQty -=
						transaction.cryptoQty;
				}
			}
		});

	return cryptoPortfolio;
};
