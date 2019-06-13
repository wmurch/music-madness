import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import KendrickLamar from './pages/KendrickLamar'
import CardiB from './pages/CardiB'
import MarkAnthony from './pages/MarkAnthony'
import TopNav from './components/TopNav'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <header>
            <TopNav />
          </header>
          <Switch>
            <Route path="/" />
            <Route path="/Klamar" exact component={KendrickLamar} />
            <Route path="/CardiB" component={CardiB} />
            <Route path="/Manthony" component={MarkAnthony} />
          </Switch>
        </Router>
      </>
    )
  }
}
export default App
