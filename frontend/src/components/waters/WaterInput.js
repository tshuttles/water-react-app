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
        <div className="WaterInputLabel">How Much Water You Have Drank?</div><br/>
        <form onSubmit={this.handleSubmit}>
          <div className="WaterInputForm">Add Amount of Water (in fluid ounces)</div>
          <input
            type="number"
            value={this.state.amount} 
            onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}