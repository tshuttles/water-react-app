import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';

const Login = ({ username, password, name, updateLoginForm }) => {
  const handleOnChange = e => {
    const { name, value } = e.target
    const updatedFormInfo = {
      name,
      value
    }
    
    updateLoginForm(updatedFormInfo)
  }
  return (
    <form onSubmit={undefined}>
      <input placeholder="username" type="text" value={username} name="username" onChange={handleOnChange} />
      <input placeholder="password" type="text" value={password} name="password" onChange={handleOnChange} />
      <input placeholder="name" type="text" value={name} name="name" onChange={handleOnChange} />
      <input type="submit" value="Log In" />
    </form>
  )
}

// this gives me an argument coming to this component that looks like this:
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

export default connect(mapStateToProps, { updateLoginForm })(Login)
// ^^ "updateLoginForm: updateLoginForm" longhand = updateLoginForm