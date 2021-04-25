import styled from 'styled-components';

export const TableContainer = styled.div`
	padding: 1rem 0;
	background-color: rgba(255, 255, 255, 0.35);
	border-radius: 2.5rem;

	@media (min-width: 768px) {
		grid-column: 1 / -1;
	}
`;

export const TableRow = styled.div`
	padding: 1rem 2rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-weight: 600;
	color: #8c95a6;
	margin-bottom: 0.8rem;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
`;

export const TableNoteRow = styled(TableRow)`
	font-weight: 400;
	border: 0;
	border-radius: 2rem;
	transition: color 0.2s;
	background-color: ${(props) =>
		props.note ? 'rgba(198, 232, 255, 0.99)' : 'transparent'};

	&:hover {
		color: black;
	}
`;

export const Title = styled.p`
	font-size: 1rem;
	flex-basis: 20%;
	display: flex;
	align-items: center;
`;

export const Author = styled(Title)`
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`;

export const Notes = styled(Title)`
	flex-basis: 10%;
`;

export const Icon = styled.img`
	width: 1.75rem;
	height: 1.75rem;
	border-radius: 50%;
	margin-right: 0.35rem;
`;
