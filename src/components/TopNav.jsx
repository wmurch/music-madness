import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TopNav extends Component {
  render() {
    return (
      <>
        <div className="Klamar">
          <Link to="/Klamar">Kendrick Lamar</Link>
        </div>
        <div className="CardiB">
          <Link to="/CardiB">Cardi B</Link>
        </div>
        <div className="Manthony">
          <Link to="/Manthony">Mark Anthony</Link>
        </div>
      </>
    )
  }
}

export default TopNav
