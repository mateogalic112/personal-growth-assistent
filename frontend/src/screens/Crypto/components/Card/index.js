import React from 'react';

import styled from 'styled-components';

const CardContainer = styled.a`
	display: block;
	padding: 1rem 2rem;
	background-color: rgba(255, 255, 255, 0.35);
	border-radius: 2.5rem;
	border-bottom: 1px solid;
	border-bottom-color: ${(props) =>
		props.priceChange > 0
			? 'rgba(0, 255, 0, 0.8)'
			: 'rgba(255, 0, 0, 0.8)'};
	transition: background-color 0.2s, border-bottom-color 0.2s;
	cursor: pointer;

	&:hover {
		background-color: rgba(255, 255, 255, 0.8);
		border-bottom-color: white;
	}

	&:focus {
		outline: none;
	}
`;

const CardTitle = styled.h5`
	font-size: 1rem;
	font-weight: 400;
`;

const Icon = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
`;

const Price = styled.h1`
	font-size: 1.75rem;
`;

const PriceChange = styled.span`
	font-size: 1rem;
	color: ${(props) =>
		props.priceChange > 0
			? 'rgba(0, 255, 0, 0.8)'
			: 'rgba(255, 0, 0, 0.8)'};
`;

const Graph = styled.div``;

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
			<div>
				<Icon src={image} />
				<CardTitle>
					#{market_cap_rank} {name} - {symbol.toUpperCase()}
				</CardTitle>
				<Price>{current_price} $</Price>
				<PriceChange>{price_change_percentage_24h} %</PriceChange>
			</div>
			<div>
				<Graph />
			</div>
		</CardContainer>
	);
};

export default Card;
