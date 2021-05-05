import styled from 'styled-components';
import { Button } from '../../theme/Button';

export const PaginationContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 500px;
`;

export const Page = styled(Button)`
	font-size: 1.125rem;
	margin-top: 1rem;
	margin-right: 0.5rem;
	padding: 0.2rem 0.5rem;
	background-color: ${(props) =>
		props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)'};
`;
