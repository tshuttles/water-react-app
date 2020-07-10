import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';

const Login = ({ loginForm, updateLoginForm, login }) => {
  const handleOnChange = e => {
    const { name, value } = e.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(loginForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" type="text" value={loginForm.username} name="username" onChange={handleOnChange} />
      <input placeholder="password" type="text" value={loginForm.password} name="password" onChange={handleOnChange} />
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    // username: state.loginForm.username, 
    // password: state.loginForm.password,
    // name: state.loginForm.name
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
// ^^ "updateLoginForm: updateLoginForm" longhand = updateLoginForm