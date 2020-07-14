import React, { Component } from 'react';
import Login from '../components/users/Login.js';
import Logout from '../components/users/Logout.js';
import { getCurrentUser } from '../actions/users/currentUser.js';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        {/* <Login /> */}
        {/* <Logout /> */}
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(NavBar);