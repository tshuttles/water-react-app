import React from 'react';
import Login from '../components/users/Login.js';
import Logout from '../components/users/Logout.js';

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
            // if statement here
              <li class="sm:inline-block">
                <a href="#" class="p-3 hover:text-white">Login</a>
              </li>
              <li class="sm:inline-block">
                <a href="#" class="p-3 hover:text-white">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  )
}
export default NavBar