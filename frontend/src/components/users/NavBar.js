import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      {/* { currentUser ? <h2>Welcome { currentUser.attributes.username }</h2> : ""} */}
      { currentUser ? <h2>Welcome { currentUser.username }</h2> : ""} 
      { currentUser ? <Logout /> : <Login /> }
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)