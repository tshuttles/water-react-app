import React, { Component } from 'react';
import { getCurrentUser } from '../actions/users/currentUser.js';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import '../NavBar.css';

class NavBar extends Component {
  render() {
    // should i make logout currentuser only?
    // if (this.props.currentUser) 
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-header">
          <div className="nav-title">
            Water Tracker
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/waters" activeClassName="active">Water Log</NavLink>
        </div>
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