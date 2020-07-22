import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/users/currentUser.js';

const Logout = ({ logout }) => {
  return (
    <form className="logout" onSubmit={logout}>
      <input type="submit" value="Log Out" />
    </form>
  )
}

export default connect(null, { logout })(Logout)