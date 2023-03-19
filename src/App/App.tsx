import React, { ReactElement } from 'react'
import './App.css'
import DeltaGreenAppBar from '../AppBar/AppBar'
import { Route, Navigate, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import Character from '../Character/Character'
import {
  Container,
  Toolbar,
  ThemeProvider,
  createTheme,
  ThemeOptions,
} from '@mui/material'
import { green } from '@mui/material/colors'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { FakeFront } from '../FakeFront'
import { Article } from '../Article/Article'
import { v4 as uuidV4 } from 'uuid'
import Profile from '../Profile/Profile'
import splashscreenURL from '../Images/splashscreen.gif'
import CreateCharacter from '../CreateCharacter/CreateCharacter'

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
})

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1b5e20',
    },
    secondary: {
      main: '#bf360c',
    },
  },
}
const theme = createTheme(themeOptions)

const App = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user)

  if (user.isLoading) {
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
          <Container maxWidth="xl" disableGutters>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Main />
                    {/* <Character /> */}
                  </>
                }
              />
              <Route
                path="/article"
                element={<Navigate to={`/article/${uuidV4()}`} />}
              />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/createcharacter"
                element={<CreateCharacter />}
              />
              <Route path="/character" element={<Character />} />
            </Routes>
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
