import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }
  
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased  ;
    max-width: 1366px;
    margin: 0 auto;
  }
  
  html, body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }

`
