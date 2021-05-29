import React from 'react'
import logo from '../Images/logo.png'
import './App.css'
import {
  DossierInterface,
  ArticleInterface,
} from 'delta-green-core/src/models/DossierModel'
import DeltaGreenAppBar from '../AppBar/AppBar'

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
    <img src={logo} className="App-logo" alt="logo" />
    <div className="text-header--1">
      <p>Welcome To Delta Green Institute</p>
    </div>
    <div className="text-header--2">
      <p>Welcome To Delta Green Institute</p>
    </div>
    <div className="text-header--3">
      <p>Welcome To Delta Green Institute</p>
    </div>
    <div className="text-header--4">
      <p>Welcome To Delta Green Institute</p>
    </div>
    <div className="text-header--5">
      <p>Welcome To Delta Green Institute</p>
    </div>
  </div>
)

export default App
