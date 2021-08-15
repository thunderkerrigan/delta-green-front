import React, { ReactElement, useEffect, useRef } from 'react'
import './App.css'
import DeltaGreenAppBar from '../AppBar/AppBar'
import { Route } from 'react-router'
import Main from '../Main/Main'
import Character from '../Character/Character'
import {
  Container,
  Toolbar,
  ThemeProvider,
  createTheme,
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { FakeFront } from '../FakeFront'
import { useConnection } from '../services/useConnection'

// const stuff: DossierInterface = {
//   codename: 'ITT-4325',
//   category: ' Green Conendrum',
//   title: ' Lorem Ipsum',
//   thumbnail: 'png',
//   articles: [],
//   resolved: true,
// }

const fakeTheme = createTheme({
  palette: { primary: green },
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
const theme = createTheme({
  palette: { secondary: green },

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

const App = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user)
  const { tryConnection } = useConnection()
  const didRequest = useRef(false)
  useEffect(() => {
    if (!didRequest.current) {
      tryConnection()
      didRequest.current = true
    }
  }, [tryConnection])
  if (user.isConnected) {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <DeltaGreenAppBar />
          <Toolbar />
          <Container disableGutters>
            <Route strict path="/">
              <Main />
              <Character />
            </Route>
          </Container>
        </div>
      </ThemeProvider>
    )
  } else {
    return (
      <ThemeProvider theme={fakeTheme}>
        <FakeFront />
      </ThemeProvider>
    )
  }
}

export default App
