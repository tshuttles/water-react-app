import React, { Component } from 'react';
import Waters from '../components/waters/Waters.js';
import WaterInput from '../components/waters/WaterInput.js';
import { addWater } from '../actions/waters/addWater.js';
import { getWaters } from '../actions/waters/getWaters.js';
import { connect } from 'react-redux'; 

class WatersContainer extends Component {

  componentDidMount() {
    this.props.getWaters()
  }

  // dailywater() {
  //     const { waters } = this.props
  //     const dailywater = waters && waters.map(water => {
  //       return (
  //         // <Water key={water.id} water={water} />
  //       )
  //     })
  //     return(
  //       <ul>
  //         {dailywater}
  //       </ul>
  //     )
  // }

  render() {
    return (
      <div className="WatersContainer">
          <WaterInput addWater={this.props.addWater}/>
          <Waters waters={this.props.waters} />
          {/* <DailyWater waters={this.props.waters} /> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({ waters: state.waters })

export default connect(mapStateToProps, { addWater, getWaters })(WatersContainer)