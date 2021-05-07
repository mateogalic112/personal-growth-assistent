import styled from 'styled-components';

export const BalanceModal = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-beetwen;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.25);
	padding: 1rem 1.5rem;
	border-radius: 2.5rem;
	border-bottom: 1px solid;
	border-bottom-color: ${(props) =>
		props.profit > 0 ? 'rgba(0, 255, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)'};

	@media (min-width: 768px) {
		padding: 1rem 2rem;
		grid-column: 1 / 3;
	}
`;

export const BalanceOverview = styled.div`
	flex-grow: 1;
`;

export const AccountLabel = styled.h1`
	font-size: 1.5rem;
`;

export const AccountValue = styled.h1`
	font-size: 2rem;
	font-weight: 400;
`;

export const Percentage = styled.span`
	font-size: 0.85rem;
	color: ${(props) =>
		props.profit > 0 ? 'rgba(0, 205, 0, 1)' : 'rgba(225, 0, 0, 0.8)'};
	margin-right: 0.2rem;
`;

export const BalanceSheet = styled.div`
	margin-right: 1rem;
	color: #8c95a6;
`;

export const BalanceLabel = styled.p`
	font-size: 0.95rem;
	color: #8c95a6;
`;

export const BalanceValue = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;

	& + p {
		margin-top: 0.5rem;
	}
`;

export const BalanceIcon = styled.i`
	font-size: 0.85rem;
	color: ${(props) =>
		props.green ? 'rgba(0, 205, 0, 1)' : 'rgba(225, 0, 0, 0.8)'};
	line-height: 1.25rem;
`;
