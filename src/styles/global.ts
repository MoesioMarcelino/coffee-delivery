import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
      border-radius: 50%;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #e5e5e5;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

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
