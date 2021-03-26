import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`    
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none
    }
`;

export default GlobalStyle;
