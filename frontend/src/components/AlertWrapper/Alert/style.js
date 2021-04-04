import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	width: 240px;
	background-color: rgba(255, 255, 255, 0.75);
	border-width: 1px;
	border-style: solid;
	border-color: ${(props) =>
		props.success > 0 ? 'rgba(0, 255, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)'};
	border-radius: 10px;
	padding: 1rem;
	margin-bottom: 1rem;
	animation-name: ${(props) => (props.exit ? SlideRight : SlideLeft)};
	animation-duration: 0.4s;
	animation-fill-mode: forwards;
`;

export const Message = styled.h6`
	font-size: 1rem;
`;

const SlideLeft = keyframes`
    0% {
        margin-left: 120%;
    }
    100% {
        margin-left: 0;
    }
`;

const SlideRight = keyframes`
    0% {
        margin-left: 0;
    }
    100% {
        margin-left: 120%;
    }
`;
