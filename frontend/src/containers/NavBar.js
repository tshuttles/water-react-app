import React, { Component } from 'react';
import { getCurrentUser } from '../actions/users/currentUser.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/waters">Water Log</Link>
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