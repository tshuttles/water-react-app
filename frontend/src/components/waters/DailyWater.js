import React, { Component } from 'react';
import Water from './Water.js';
import moment from 'moment';

export default class DailyWater extends Component {
  render() {
    const { waters } = this.props.location.state 
    let today = moment().dayOfYear()
    let todayWater = waters.filter(water => water.date === today.toString())
    const waterFilter = todayWater.map(water => {
      return (
        <Water key={water.id} water={water} date={water.created_at} />
      )
    })

    return(
      <div className="dailywater">
        <h2>Today's Water</h2>
        { waterFilter }
      </div>
    )
  }
};