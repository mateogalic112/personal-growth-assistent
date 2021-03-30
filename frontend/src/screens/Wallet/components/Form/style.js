import styled from 'styled-components';

export const FormWrapper = styled.div`
	max-height: ${(props) => (props.isOpen ? '20rem' : '0')};
	opacity: ${(props) => (props.isOpen ? '1' : '0')};
	transition: max-height 0.35s, opacity 0.35s;
`;

export const StyledForm = styled.form`
	width: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
