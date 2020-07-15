// be child of waters container 
// filter out waters with today's date (do logic in waterscontainer)
// return x oz of water today (do logic in waterscontainer)
// pass down the return of that function down to this file

import React, { Component } from 'react';
import { dailywater } from '../containers/WatersContainer.js';

export default class DailyWater extends Component {
  render() {
    const { waters } = this.props
    const dailywater = waters && waters.map(water => {
      return (
        <Water key={water.id} water={water} />
      )
    })
    return(
      <div className="dailywater">
        { dailywater }
      </div>
    )
  }
};