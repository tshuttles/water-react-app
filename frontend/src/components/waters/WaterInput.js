import React, { Component } from 'react';

export default class WaterInput extends Component {
  constructor() {
    super()
    this.state = {
      amount: 0
    }
  }

  handleOnChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addWater(this.state.amount)
    // this.setState({amount: 0})
  }

  render() {
    return (
      <div>
        <h4>How Much Water You Have Consumed?</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Add Amount of Water</label>
          <input
            type="number" 
            value={this.state.amount} 
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}