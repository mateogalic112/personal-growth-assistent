import styled from 'styled-components';

export const CardContainer = styled.a`
	display: block;
	width: 200px;
	min-height: 260px;
	position: relative;
	border-radius: 2rem;
	padding: 1rem 1.25rem;
	background-color: rgba(255, 255, 255, 0.5);
	margin-top: 2rem;
	transition: background-color 0.2s;
	cursor: pointer;
	display: flex;
	flex-direction: column;

	&:hover {
		background-color: white;
	}
`;

export const CardTitle = styled.h4`
	font-size: 1rem;
	text-align: left;
	margin-bottom: 0.35rem;
`;

export const FlexCenter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CardSubtitle = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 0.9rem;
	margin-bottom: 0.65rem;
`;

export const CardImage = styled.img`
	display: block;
	width: 75px;
	height: 100px;
	position: absolute;
	top: -10%;
	right: -15%;
	border-radius: 10%;
`;

export const CardContent = styled.div`
	color: #8c95a6;
	font-size: 0.75rem;
	margin-top: auto;
`;

export const CardLabels = styled.div`
	font-size: 0.7rem;
	font-weight: bold;
	color: #8c95a6;
	margin-top: 1rem;
	position: relative;
`;

export const DietLabel = styled.div`
	position: absolute;
	bottom: -20%;
	right: -15%;
	background-color: white;
	padding: 0.25rem 1rem;
	transform: rotate(-20deg);
	border-radius: 0.5rem;
`;

export const CardLabel = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: .25rem;
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
		cursor: pointer;
	}
`;
