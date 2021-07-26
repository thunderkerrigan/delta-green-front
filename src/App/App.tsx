import React from 'react'
import './App.css'
import DeltaGreenAppBar from '../AppBar/AppBar'
import { Route } from 'react-router'
import Main from '../Main/Main'
import Character from '../Character/Character'
import { Container, Toolbar } from '@material-ui/core'

// const stuff: DossierInterface = {
//   codename: 'ITT-4325',
//   category: ' Green Conendrum',
//   title: ' Lorem Ipsum',
//   thumbnail: 'png',
//   articles: [],
//   resolved: true,
// }

const App = (): JSX.Element => {
  return (
    <div className="App">
      <DeltaGreenAppBar />
      <Toolbar />
      <Container>
        <Route strict path="/">
          <Main />
          <Character />
        </Route>
      </Container>
    </div>
  )
}

export default App
