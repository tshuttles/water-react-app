import React, { Component } from 'react';
import Water from './Water';

export default class Waters extends Component {
  render() {
    const { waters } = this.props
    const dailywater = waters && waters.map(water => {
      return (
        <Water key={water.id} water={water} />
      )
    })

    return(
      <ul>
        {dailywater}
      </ul>
    )
  }
};