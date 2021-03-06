import styled from 'styled-components';

const Circle = styled.div`
	background: radial-gradient(
		circle,
		rgba(226, 249, 255, 0.5) 0%,
		rgba(231, 245, 255, 0.5) 70%
	);
	position: absolute;
	height: 15rem;
	width: 15rem;
	border-radius: 50%;
`;

export const CircleOne = styled(Circle)`
	top: -10%;
	right: 0%;
`;

export const CircleTwo = styled(Circle)`
	bottom: -10%;
	left: 0;
`;

export const CircleThree = styled(Circle)`
	top: 20%;
	left: 30%;
`;

export const CircleFour = styled(Circle)`
	bottom: 30%;
	left: 70%;
`;
