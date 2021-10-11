import React, { StrictMode } from 'react'
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
import LoadingScreen, {
  WebGLCanvas,
} from './LoadingScreen/LoadingScreen'
import { WebGLProvider } from './LoadingScreen/context'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <WebGLProvider>
    <WebGLCanvas />
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <App />
        {/* <LoadingScreen /> */}
      </BrowserRouter>
    </Provider>
  </WebGLProvider>,
  rootElement,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
