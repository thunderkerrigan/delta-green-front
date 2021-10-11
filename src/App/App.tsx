import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
} from 'react'
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
import { useTryConnection } from '../services/useConnection'
import { Article } from '../Article/Article'
import { v4 as uuidV4 } from 'uuid'
import Profile from '../Profile/Profile'
import { useCharacter } from '../services/useCharacter'
import splashscreenURL from '../Images/splashscreen.gif'

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
  const { getMyCharacters } = useCharacter()
  const { loading: waiting } = useTryConnection()

  useEffect(() => {
    if (user.isConnected) {
      getMyCharacters()
    }
  }, [getMyCharacters, user.isConnected])
  if (waiting) {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <img
          style={{
            width: '100vw',
            height: 'auto',
          }}
          src={splashscreenURL}
        />
      </div>
    )
  }

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
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/character">
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
