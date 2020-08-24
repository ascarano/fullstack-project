import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Search from './components/Search'
import Favorites from './components/Favorites'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
