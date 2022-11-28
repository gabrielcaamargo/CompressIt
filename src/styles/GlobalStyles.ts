import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  body {
    max-width: 750px;
    width: 100%;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textColor};
  }

  h1 {
    font-family: 'Roboto Condensed';
  }
`;
