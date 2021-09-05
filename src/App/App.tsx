import React, { ReactElement, useEffect } from 'react'
import './App.css'
import DeltaGreenAppBar from '../AppBar/AppBar'
import { Redirect, Route } from 'react-router'
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
import { Article } from '../Article/Article'
import { v4 as uuidV4 } from 'uuid'

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

  useEffect(() => {
    tryConnection()
  }, [tryConnection])
  if (user.isConnected) {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <DeltaGreenAppBar />
          <Toolbar />
          <Container disableGutters>
            <Route exact strict path="/">
              <Main />
              <Character />
            </Route>
            <Route exact path="/article">
              <Redirect to={`/article/${uuidV4()}`} />
            </Route>
            <Route path="/article/:id">
              <Article />
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
