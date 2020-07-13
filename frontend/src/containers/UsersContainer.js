import React, { Component } from 'react';
import { getCurrentUser } from '../actions/users/currentUser.js';
import { connect } from 'react-redux';
import NavBar from './NavBar.js';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="UsersContainer">
        { this.props.currentUser ? <h2>Welcome, { this.props.currentUser.attributes.username }</h2> : ""}
        <NavBar currentUser={this.props.currentUser}/>
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