import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { AppProvider } from './hooks'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
