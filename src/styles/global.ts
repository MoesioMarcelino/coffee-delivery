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
    -webkit-font-smoothing: antialiased  
  }
  
  html, body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3;
  }

`
