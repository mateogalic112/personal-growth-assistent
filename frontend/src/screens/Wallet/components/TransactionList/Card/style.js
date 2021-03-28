import styled from 'styled-components';

export const TransactionCard = styled.div`
	display: flex;
	align-items: center;
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

	&:hover {
		background-color: rgba(255, 255, 255, 0.8);
		border-bottom-color: white;
	}

	&:focus {
		outline: none;
	}
`;

export const Main = styled.div`
	display: 'flex';
	flex-direction: column;
	flex-grow: 1;
`;

export const CardTitle = styled.h2`
	font-size: 1.25rem;
	margin-bottom: 1rem;
`;

export const CardType = styled.p`
	font-size: 0.85rem;
	color: #8c95a6;
`;

export const Amount = styled.h4`
	font-size: 1.25rem;
`;

export const Actions = styled.div`
	display: flex;
	justify-content: space-between;
`;
