import React, { Component } from 'react'
import CardiB from '../images/CardiB.png'

class CardibData extends Component {
  render() {
    return (
      <>
        <div>
          {console.log(this.props.location)}
          <h1>Cardi B</h1>
          <img src={CardiB} alt="Cardi B" />
        </div>
      </>
    )
  }
}

export default CardibData
