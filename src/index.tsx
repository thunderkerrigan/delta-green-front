import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './Fonts/fonts.css'
import App from './App/App'
import reportWebVitals from './reportWebVitals'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core'
import '@fontsource/roboto'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
})

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
