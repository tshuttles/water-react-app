import React, { Component } from 'react';

export default class Water extends Component {
  render() {
    const { water } = this.props;
    return (
      <div className="water-entry">
        <li>
          Amount: {water.amount} fl oz<br/>
          Time of Entry: {water.created_at}
        </li>
      </div>
    );
  }
}