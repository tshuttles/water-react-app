import React, { Component } from 'react';

export default class Water extends Component {
  render() {
    const { water } = this.props;
    return (
      <div>
        <li>
          {water.amount} fl oz {water.created_at}
        </li>
      </div>
    );
  }
}