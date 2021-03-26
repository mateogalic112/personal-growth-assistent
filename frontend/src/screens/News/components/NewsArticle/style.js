import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	box-shadow: 0px 0px 10px 5px rgba(68, 68, 68, 0.2);
	border-radius: 2rem;
	overflow: hidden;
	transition: box-shadow 0.2s;
	height: fit-content;
	min-width: 240px;

	&:hover {
		box-shadow: 0px 0px 15px 10px rgba(68, 68, 68, 0.4);
	}
`;

export const Image = styled.img`
	display: block;
	height: 150px;
	object-fit: cover;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 1.25rem 1rem 2rem 1rem;
	color: 'black';
`;

export const Title = styled.h6`
	font-size: 1.15rem;
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
	padding: 0.25rem 1rem;
	font-size: 0.75rem;
	width: fit-content;
	border-radius: 1rem;
	transition: background-color 0.2s, color 0.2s;

	&:hover {
		background-color: black;
		color: white;
	}
`;
