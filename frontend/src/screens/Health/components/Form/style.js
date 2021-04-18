import styled from 'styled-components';

export const FormWrapper = styled.div`
	transform: ${(props) => (props.isOpen ? 'scale(1)' : 'scale(0)')};
	max-height: ${(props) => (props.isOpen ? '20rem' : '0')};
	opacity: ${(props) => (props.isOpen ? '1' : '0')};
	transition: max-height 0.35s, opacity 0.35s;
`;

export const StyledForm = styled.form`
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> * {
		margin: 0;
	}

	button {
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		> * {
			margin-right: auto;
		}
	}
`;
