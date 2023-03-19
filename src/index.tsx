import React from 'react'
import ReactDOMClient from 'react-dom/client'
import './index.css'
import './Fonts/fonts.css'
import App from './App/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import DateAdapter from '@mui/lab/AdapterLuxon'
import { FirebaseAuthProvider } from './firebase'
import { LocalizationProvider } from '@mui/lab'

const rootElement = document.getElementById('root')
const root = rootElement && ReactDOMClient.createRoot(rootElement)

root?.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <FirebaseAuthProvider />
      {/* <LocalizationProvider dateAdapter={DateAdapter}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </LocalizationProvider> */}
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
