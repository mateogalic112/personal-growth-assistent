import styled from 'styled-components'

export const Content = styled.div`
    flex-basis: 100%;

    @media (min-width: 768px) {
        flex-basis: 50%;
	}
`

export const Illustration = styled.img`
    display: none;

    @media (min-width: 768px) {
        display: block;
		flex-basis: 45%;
        width: 50%;
        height: auto;
	}
`