import React, { Component } from 'react';
import Water from '../components/Water.js'

export default class WatersContainer extends Component {
  render() {
    return (
      <div>
        <ul>
          <Water />
        </ul>
      </div>
    )
  }
}