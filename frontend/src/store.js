import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/users/currentUser.js';
import loginForm from './reducers/users/loginForm.js';
import manageWaters from './reducers/waters/manageWaters.js';
import signupForm from './reducers/users/signupForm.js';
import waterForm from './reducers/waters/waterForm.js';

const reducer = combineReducers({
  currentUser,
  loginForm,
  waters: manageWaters,
  signupForm,
  waterForm
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store 