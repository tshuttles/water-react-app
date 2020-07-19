import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/users/loginForm.js';
import { login } from '../../actions/users/currentUser.js';

const Login = ({ loginForm, updateLoginForm, login }) => {
  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" type="text" value={loginForm.username} name="username" onChange={handleOnChange} /><br/>
      <input placeholder="password" type="text" value={loginForm.password} name="password" onChange={handleOnChange} /><br/>
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    // username: state.loginForm.username, 
    // password: state.loginForm.password
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
// ^^ "updateLoginForm: updateLoginForm" longhand = updateLoginForm