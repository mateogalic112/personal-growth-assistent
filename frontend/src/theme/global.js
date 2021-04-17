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

    /**
     * React Date picker
    */
    .react-datepicker-wrapper {
        width: 100%;
    }

    .react-datepicker__input-container input {
        height: 2rem;
		width: 100%;
		padding: 0.35rem 1rem;
		font-size: 0.8rem;
		border-radius: 2.5rem;
		border: none;
		outline: none;
		color: #14121f;
        opacity: 0.7;
        transition: 0.2s opacity, 0.2s box-shadow;
    }

    .react-datepicker__input-container input::placeholder {
        font-size: 0.75rem;
		color: #8c95a6;
        opacity: 1;
    }

    .react-datepicker__input-container input:focus, .react-datepicker__input-container input:hover {
        box-shadow: 0px 0px 5px 3px rgba(68, 68, 68, 0.2);
        opacity: 1;
    }

    .react-datepicker__month .react-datepicker__month-text {
        padding: 0.5rem;
    }

    .swiper-container {
        max-width: 780px;
        height: 100%;
        overflow: hidden;
    }
    
    .swiper-slide {
        width: 300px;
        height: auto;
    }
`;

export default GlobalStyle;
