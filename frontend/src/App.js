import React from 'react';
import './App.css';
import WatersContainer from './containers/WatersContainer.js';
import UsersContainer from './containers/UsersContainer.js';
import NavBar from './containers/NavBar.js';
import { Footer } from './components/Footer.js';
import { Route } from 'react-router-dom';
import Login from './components/users/Login.js';
// import Logout from './components/users/Logout.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UsersContainer />
        <WatersContainer />
        <Footer />
        <NavBar />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/logout" component={Logout} /> */}
          <Route exact path="/waters" component={WatersContainer} />
      </div>
    )
  }
}