import styled from 'styled-components';

export const Container = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	height: 360px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 2rem;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.7);
	}

	@media (min-width: 768px) {
		grid-column: 1 / span 2;
	}
`;

export const CoverImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	object-fit: cover;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem 2rem;
	z-index: 1;
	color: white;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	text-align: left;
	margin-bottom: 0.65rem;
`;

export const Description = styled.p`
	font-size: 1rem;
	line-height: 1.3;
	letter-spacing: 0.5px;
	margin-bottom: 0.65rem;
`;

export const Source = styled.p`
	font-size: 0.85rem;
`;

export const Author = styled.p`
	font-size: 0.75rem;
`;

export const Published = styled.p`
	margin-left: 0.5rem;
	font-size: 0.75rem;
`;

export const Button = styled.button`
	display: inline-block;
	color: white;
	text-decoration: none;
	border: 1px solid white;
	padding: 0.45rem 1.15rem;
	font-size: 0.9rem;
	width: fit-content;
	border-radius: 1rem;
	transition: background-color 0.2s, color 0.2s;

	&:hover {
		background-color: white;
		color: black;
	}
`;
