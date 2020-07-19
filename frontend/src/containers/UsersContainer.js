import React, { Component } from 'react';
import { getCurrentUser } from '../actions/users/currentUser.js';
import { connect } from 'react-redux';
import Login from '../components/users/Login.js';
import Logout from '../components/users/Logout.js';
import { Link } from 'react-router-dom';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const username = this.props.currentUser && this.props.currentUser.username
    let component;
    if (this.props.currentUser) {
      component = <div className="loggedin">
                    Welcome, {username} <Logout />
                    <br/>
                    <br/>
                    Check out your Water Log to make your entries!
                    <div className="cup"></div>
                  </div>
    } else {
      component = <div className="loggedout">
                    Log In Here
                    <Login /><br/>
                    or Register Now!<br/>
                    <Link to="/signup">Sign Up</Link>
                  </div>
    }
    return (
      <div className="UsersContainer">
        {component}
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(UsersContainer);