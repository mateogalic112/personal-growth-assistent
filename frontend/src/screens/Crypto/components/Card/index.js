import { CardContainer, Icon, CardTitle, Price, PriceChange } from './style';

const currencyFormatter = require('currency-formatter');

const Card = ({
	id,
	image,
	market_cap_rank,
	name,
	symbol,
	current_price,
	price_change_percentage_24h,
}) => {
	const BASE_URL = 'https://coinmarketcap.com/currencies';

	return (
		<CardContainer
			target='_blank'
			href={`${BASE_URL}/${id}`}
			priceChange={price_change_percentage_24h}
		>
			<Icon src={image} />
			<CardTitle>
				#{market_cap_rank} {name} - {symbol.toUpperCase()}
			</CardTitle>
			<Price>
				{currencyFormatter.format(current_price, {
					code: 'USD',
				})}
			</Price>
			<PriceChange priceChange={price_change_percentage_24h}>
				{price_change_percentage_24h} %
			</PriceChange>
		</CardContainer>
	);
};

export default Card;
