import React from 'react';
// import './App.css';
import Login from './components/users/Login.js';
import Logout from './components/users/Logout.js';
import WatersContainer from './containers/WatersContainer.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/users/currentUser.js';


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
      this.props.currentUser ? <Logout /> : <Login />
      // <WatersContainer />
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);