import React, { Component } from 'react'
import CardiB from '../images/CardiB.png'

class CardibData extends Component {
  render() {
    return (
      <>
        <main>
          <div>
            {console.log(this.props.location)}
            <h1>Cardi B</h1>
            <p>Latest Album: Invasion of Privacy</p>
            <img src={CardiB} alt="Cardi B" />
          </div>
        </main>
      </>
    )
  }
}

export default CardibData
