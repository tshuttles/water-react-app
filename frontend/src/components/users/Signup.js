import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../../actions/users/signupForm.js';
import { signup } from '../../actions/users/currentUser.js';
// import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

const Signup = ({ signupForm, updateSignupForm, signup }) => {
  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupForm,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  // let history = useHistory()
  const handleSubmit = event => {
    event.preventDefault()
    signup(signupForm)
    // history.push("/")
  }

  // const componentDidMount = () => {
  //   this.props.getCurrentUser()
  // }

  // if (componentDidMount()) {
  //   render redirect component which will change the route
  //   return (
  //     <Redirect to="/" />
  //   )
  // }

  return (
    <div className="signup">
      Register Here
      <br/>
      <form onSubmit={handleSubmit}>
      <input placeholder="username" type="text" value={signupForm.username} name="username" onChange={handleOnChange} />
      <input placeholder="password" type="text" value={signupForm.password} name="password" onChange={handleOnChange} />
      <input type="submit" value="Sign Up" />
    </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    signupForm: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)