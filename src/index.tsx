import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './Fonts/fonts.css'
import App from './App/App'
import reportWebVitals from './reportWebVitals'
// import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import '@fontsource/roboto'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
  // <StrictMode>
  <Provider store={store}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </StrictMode>,

  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
