import React, { Component } from 'react';
import Water from './Water';

export default class Waters extends Component {
  // all commented code is from filter during project review

  // state = {
  //   toggleOn: false
  // }

  // handleClick = () => {
  //   this.setState(state => ({toggleOn: !state.toggleOn}))
  // }

  render() {
    const { waters } = this.props
    const allwater = waters && waters.map(water => {
      return (
        <Water key={water.id} water={water} date={water.created_at} />
      )
    })
    // let specificWater = waters.filter(water => water.amount > 20)
    // const allwater = waters && (this.state.toggleOn ? specificWater : waters).map(water => {
    //   return (
    //     <Water key={water.id} water={water} date={water.created_at} />
    //   )
    // })
    
    return(
      <div className="waters">
        <h2>Water Log</h2>
        { allwater }
        {/* <button onClick={this.handleClick}>Toggle</button> */}
      </div>
    )
  }
};