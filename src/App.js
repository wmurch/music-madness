import React, { Component } from 'react'
import Main from './pages/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Klamar from './pages/Klamar'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/Klamar" exact component={Klamar} />
          </Switch>
        </Router>
      </>
    )
  }
}
export default App
