import styled from 'styled-components'
import { FlexCenter } from '../BookCard/style'

export const PageFormWrapper = styled(FlexCenter)`
    flex-wrap: wrap;
    flex-direction: column;

    & > * {
        margin-bottom: .5rem;
    }

    @media (min-width: 768px) {
		flex-direction: row;
	}
`