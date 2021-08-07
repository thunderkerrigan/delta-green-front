import React, { ReactElement } from 'react'
import './App.css'
import DeltaGreenAppBar from '../AppBar/AppBar'
import { Route } from 'react-router'
import Main from '../Main/Main'
import Character from '../Character/Character'
import { Container, Toolbar } from '@material-ui/core'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { FakeFront } from '../FakeFront'

// const stuff: DossierInterface = {
//   codename: 'ITT-4325',
//   category: ' Green Conendrum',
//   title: ' Lorem Ipsum',
//   thumbnail: 'png',
//   articles: [],
//   resolved: true,
// }

const App = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user)
  if (user.isConnected) {
    return (
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
    )
  } else {
    return <FakeFront />
  }
}

export default App
