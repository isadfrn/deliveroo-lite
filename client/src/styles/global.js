import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.1s;
  }

  body {
    background: ${({ theme }) => theme.BACKGROUND};
    color: ${({ theme }) => theme.WHITE};
    font-family: ${({ theme }) => theme.POPPINS};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
