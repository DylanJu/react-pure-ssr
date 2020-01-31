import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: 400;
    color: white;
  }

  button {
    border: none;
    background-color: transparent;
    outline: none;
  }

  select {
    appearance: none;
    border-radius: 0px;
    padding: 6px 9px;
    border: none;
  }
`;

export default GlobalStyle;
