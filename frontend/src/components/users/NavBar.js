import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      {/* { currentUser ? <h2>Welcome, { currentUser.attributes.username }</h2> : ""} */}
      {/* { currentUser ? <Logout /> : <Login /> } */}
      {/* <nav class="bg-purple-700 shadow-sm">
        <div class="container mx-auto">
          <div class="sm:flex justify-around">
            <a class="text-white text-3xl font-bold p-3">Water Tracker</a>
            <ul
              class="text-gray-400 sm:self-center text-xl border-t-2 sm:border-none"
            >
              <li class="sm:inline-block">
                <a href="#" class="p-3 hover:text-white">Home</a>
              </li>
              <li class="sm:inline-block">
                <a href="#" class="p-3 hover:text-white">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)