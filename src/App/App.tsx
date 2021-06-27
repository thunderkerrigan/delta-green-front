import React from 'react'
import logo from '../Images/logo.png'
import './App.css'
import {
  DossierInterface,
  ArticleInterface,
} from 'delta-green-core/src/models/DossierModel'
import DeltaGreenAppBar from '../AppBar/AppBar'
import { Route } from 'react-router'
import Main from '../Main/Main'
import Character from '../Character/Character'

const stuff: DossierInterface = {
  codename: 'ITT-4325',
  category: ' Green Conendrum',
  title: ' Lorem Ipsum',
  thumbnail: 'png',
  articles: [],
  resolved: true,
}

const App = (): JSX.Element => (
  <div className="App">
    <DeltaGreenAppBar />
    <Route strict path="/">
      <Main />
      <Character />
    </Route>
  </div>
)

export default App
