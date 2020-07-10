import React, { Component } from 'react';
import Waters from '../components/Waters.js';
import { connect } from 'react-redux'; 

class WatersContainer extends Component {

  render() {
    return (
      <div>
        <ul>
          <Waters waters={this.props.waters} />
        </ul>
      </div>
    )
  }
}