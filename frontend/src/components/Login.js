import React from 'react';
import { connect } from 'react-redux';

const Login = ({ username, password, name }) => {
  const handleOnChange = (e) => {
    return ""
  }
  return (
    <form onSubmit={handleOnChange}>
      <input placeholder="username" type="text" onChange={handleOnChange} value={username} name="username" />
      <input placeholder="password" type="text" onChange={handleOnChange} value={password} name="password" />
      <input placeholder="name" type="text" onChange={handleOnChange} value={name} name="name" />
      <input type="submit" value="Log In" />
    </form>
  )
}

// this gives me an arg coming to this component that looks like this:
// {
//   username: "jsmith"
//   password: "smith1"
//   name: "John"
// }
const mapStateToProps = state => {
  return {
    username: state.loginForm.username, 
    password: state.loginForm.password,
    name: state.loginForm.name
  }
}

export default connect(mapStateToProps)(Login)