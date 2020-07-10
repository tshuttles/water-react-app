import React from 'react';
// import './App.css';
import Login from './components/users/Login.js';
import WatersContainer from './containers/WatersContainer.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/users/currentUser.js';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Water</h1>
        </header>
        <Login />
        <WatersContainer />
      </div>
    )
  }
}

export default connect(null, {getCurrentUser})(App);