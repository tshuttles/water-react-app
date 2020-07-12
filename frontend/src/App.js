import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/users/currentUser.js';

import WatersContainer from './containers/WatersContainer.js';
import NavBar from './components/users/NavBar.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
          // <h1>Water Tracker</h1>
      //   </header>
      // </div>
      <div className="App">
        <h1>Water Tracker</h1>
        <NavBar />
        <WatersContainer />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);