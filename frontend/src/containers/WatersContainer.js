import React, { Component } from 'react';
import Waters from '../components/waters/Waters.js';
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
const mapStateToProps = state => ({ waters: state.waters })

const mapDispatchToProps = dispatch => ({
  addWater: amount => dispatch({ type: 'ADD_WATER', amount })
})

export default connect(mapStateToProps, mapDispatchToProps)(WatersContainer)