import React, { Component } from 'react';

export default class WaterInput extends Component {
  constructor() {
    super()
    this.state = {
      amount: ""
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
  }

  render() {
    return (
      <div className="WaterInputLabel">
        How Much Water You Have Drank?
        <br/>
        <br/>
          <form onSubmit={this.handleSubmit}>
            Add Amount of Water (in fluid ounces)<br/>
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