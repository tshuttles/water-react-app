import React from 'react';
import connect from 'react-redux'

const Login = ({ username, password, name }) => {
  return (
    <form onSubmit={}>
      <input type="text" onChange={} value={username} name="username">Username:</input>
      <input type="text" onChange={} value={password} name="password">Password:</input>
      <input type="text" onChange={} value={name} name="name">Enter Your First Name:</input>
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

export default connect(mapStateToProps, )(Login)