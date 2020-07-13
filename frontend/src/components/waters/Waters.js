import React, { Component } from 'react';
import Water from './Water';

export default class Waters extends Component {
  render() {
    const { waters } = this.props
    const waterList = waters && waters.map(water => {
      return (
        <Water key={water.id} water={water} />
      )
    })

    return(
      <ul>
        {waterList}
      </ul>
    )
  }
};