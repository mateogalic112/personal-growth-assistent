import styled from 'styled-components';

export const TableContainer = styled.div`
	padding: 1rem 2rem;
	background-color: rgba(255, 255, 255, 0.35);
	border-radius: 2.5rem;

	@media (min-width: 768px) {
		grid-column: 1 / -1;
	}
`;

export const TableRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-weight: 600;
	color: #8c95a6;
	margin-bottom: 0.8rem;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
`;

export const TableCoinRow = styled(TableRow)`
	font-weight: 400;
	border: 0;
	transition: color 0.2s;

	&:hover {
		color: black;
	}
`;

export const Icon = styled.img`
	width: 1.75rem;
	height: 1.75rem;
	border-radius: 50%;
	margin-right: 0.35rem;
`;

export const Title = styled.p`
	font-size: 1rem;
	flex-basis: 20%;
	display: flex;
	align-items: center;
`;

export const Allocation = styled(Title)`
	display: none;
	flex-basis: 30%;
	flex-shrink: 0;

	label {
		margin-right: 0.5rem;
	}

	progress {
		width: 60%;
	}

	@media (min-width: 1024px) {
		display: flex;
		align-items: center;
	}
`;
export const Amount = styled(Title)`
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`;

export const Value = styled(Title)`
	flex-basis: 10%;
`;
