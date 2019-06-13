import React, { Component } from 'react'
import Klamar from '../images/Klamar.png'

class KlamarData extends Component {
  render() {
    return (
      <>
        <div>
          {console.log(this.props.location)}
          <h1>Kendrick Lamar</h1>
          <img src={Klamar} alt="Kendrick Lamar" />
        </div>
      </>
    )
  }
}

export default KlamarData
