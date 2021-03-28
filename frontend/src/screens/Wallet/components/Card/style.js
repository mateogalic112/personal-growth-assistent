import styled from 'styled-components';

export const CardContainer = styled.a`
	display: flex;
	justify-content: space-between;
	min-width: 200px;
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

export const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 1rem;
`;

export const CardTitle = styled.h5`
	font-size: 1rem;
	font-weight: 600;
`;

export const Icon = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
`;

export const Price = styled.h1`
	font-size: 1.5rem;
`;

export const PriceChange = styled.span`
	font-size: 1rem;
	color: ${(props) =>
		props.priceChange > 0 ? 'rgba(0, 205, 0, 1)' : 'rgba(205, 0, 0, 0.8)'};
`;
