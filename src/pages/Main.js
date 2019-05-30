import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div>
        <h1>My Favorite Artists</h1>
        <section>
          <Link to="/Klamar">Kendrick Lamar</Link>
        </section>
      </div>
    )
  }
}

export default Main
