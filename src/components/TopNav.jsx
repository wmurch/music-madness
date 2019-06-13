import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TopNav extends Component {
  render() {
    return (
      <>
        <Link to="/Klamar">Kendrick Lamar</Link>
        <Link to="/CardiB">Cardi B</Link>
        <Link to="/CardiB">Mark Anthony</Link>
      </>
    )
  }
}

export default TopNav
