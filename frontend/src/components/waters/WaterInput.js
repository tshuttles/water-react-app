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
    this.setState({amount: 0})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label Add Amount of Water/>
          <input 
            type="number" 
            value={this.state.amount} 
            onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}