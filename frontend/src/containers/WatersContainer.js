import React, { Component } from 'react';
import Waters from '../components/waters/Waters.js';
import WaterInput from '../components/waters/WaterInput.js';
import DailyWater from '../components/waters/DailyWater.js';
import { addWater } from '../actions/waters/addWater.js';
import { getWaters } from '../actions/waters/getWaters.js';
import { connect } from 'react-redux'; 

class WatersContainer extends Component {

  componentDidMount() {
    this.props.getWaters()
  }

  render() {
    return (
      <div className="WatersContainer">
          <WaterInput addWater={this.props.addWater}/>
          <Waters waters={this.props.waters} />
          <DailyWater waters={this.props.waters} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ waters: state.waters })

export default connect(mapStateToProps, { addWater, getWaters })(WatersContainer)