import styled from 'styled-components';

export const StatsModal = styled.div`
	display: flex;
    flex-wrap: wrap;
	justify-content: space-beetwen;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.35);
	padding: 1rem 2rem;
	border-radius: 2.5rem;

	@media (min-width: 768px) {
		grid-column: 1 / span 2;
	}
`;

export const StatsOverview = styled.div`
	flex-grow: 1;
    margin: 1rem 0;
`;

export const StatsLabel = styled.h1`
	font-size: 1.25rem;
    color: #8c95a6;
    margin-bottom: 1rem;
`;

export const StatsValue = styled.h1`
	font-size: 1.35rem;
	font-weight: 400;

    span {
        font-weight: 600;
    }
`;

export const Percentage = styled.span`
	font-size: 0.85rem;
	color: ${(props) =>
		props.profit > 0 ? 'rgba(0, 205, 0, 1)' : 'rgba(225, 0, 0, 0.8)'};
	margin-right: 0.2rem;
`;

export const StatsMeter = styled.div`
	margin-right: 1rem;
    height: 120px;
`;
