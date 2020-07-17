import React, { Component } from 'react';
import Water from './Water';

export default class Waters extends Component {
  render() {
    const { waters } = this.props
    const allwater = waters && waters.map(water => {
      return (
        <Water key={water.id} water={water} date={water.created_at} />
      )
    })

    return(
      <div className="waters">
        <h2>Water Log</h2>
        <ul>
          {allwater}
        </ul>
      </div>
    )
  }
};