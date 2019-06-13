import React, { Component } from 'react'
import Manthony from '../images/Manthony.png'

class ManthonyData extends Component {
  render() {
    return (
      <>
        <div>
          {console.log(this.props.location)}
          <h1>Mark Anthony</h1>
          <img src={Manthony} alt="Mark Anthony" />
        </div>
      </>
    )
  }
}

export default ManthonyData
