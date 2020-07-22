import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../../actions/users/signupForm.js';
import { signup } from '../../actions/users/currentUser.js';
import { Redirect } from 'react-router-dom';

const Signup = ({ currentUser, signupForm, updateSignupForm, signup }) => {
  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupForm,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupForm)
  }

  if (currentUser) {
    // render redirect component which will change the route
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className="signup">
      Register Here
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <input placeholder="username" type="text" value={signupForm.username} name="username" onChange={handleOnChange} /><br/>
        <input placeholder="password" type="password" value={signupForm.password} name="password" onChange={handleOnChange} /><br/>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    signupForm: state.signupForm,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)