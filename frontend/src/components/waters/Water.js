import React, { Component } from 'react';

export default class Water extends Component {
  render() {
    // const { water } = this.props;
    return (
      <div>
        <li>
          {this.props.amount}
        </li>
      </div>
    );
  }
}