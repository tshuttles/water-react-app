import React from 'react';
import './App.css';
import WatersContainer from './containers/WatersContainer.js';
import UsersContainer from './containers/UsersContainer.js';
import NavBar from './containers/NavBar.js';
import { Footer } from './components/Footer.js';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/users/Signup.js';
import DailyWater from './components/waters/DailyWater.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
         <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/waters" component={WatersContainer} />
          <Route exact path="/waters/dailywater" component={DailyWater}/>
          <Route exact path="/" component={UsersContainer} />
         </Switch>
        <Footer />
      </div>
    )
  }
}