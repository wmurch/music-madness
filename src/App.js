import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import KendrickLamar from './pages/KendrickLamar'
import CardiB from './pages/CardiB'
import MarkAnthony from './pages/MarkAnthony'
import TopNav from './components/TopNav'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Router>
            <TopNav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Klamar" component={KendrickLamar} />
              <Route path="/CardiB" component={CardiB} />
              <Route path="/Manthony" component={MarkAnthony} />
            </Switch>
          </Router>
        </header>
        <main />
      </>
    )
  }
}
export default App
