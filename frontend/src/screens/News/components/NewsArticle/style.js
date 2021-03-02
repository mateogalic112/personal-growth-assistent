import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	box-shadow: 0px 0px 10px 5px rgba(68, 68, 68, 0.2);
	border-radius: 2rem;
	overflow: hidden;
	transform: scale(1);
	transition: box-shadow 0.2s, transform 0.15s;

	&:hover {
		box-shadow: 0px 0px 15px 10px rgba(68, 68, 68, 0.2);
		transform: scale(1.02);
	}
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 2rem 1rem;
	color: 'black';
`;

export const Title = styled.h6`
	font-size: 1rem;
	line-height: 1.3;
	margin-bottom: 0.75rem;
`;

export const Source = styled.h6`
	font-size: 0.8rem;
	margin-bottom: 0.5rem;
`;

export const Author = styled.h6`
	font-size: 0.75rem;
`;

export const Published = styled.p`
	font-size: 0.75rem;
	margin-left: 0.25rem;
`;

export const Button = styled.h6`
	display: inline-block;
	color: black;
	text-decoration: none;
	border: 1px solid black;
	padding: 0.45rem 1rem;
	font-size: 0.65rem;
	width: fit-content;
	border-radius: 1rem;
	transition: background-color 0.2s, color 0.2s;

	&:hover {
		background-color: black;
		color: white;
	}
`;
