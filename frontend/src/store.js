import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/users/currentUser.js';
import loginForm from './reducers/users/loginForm.js';
import manageWaters from './reducers/waters/manageWaters.js';

const reducer = combineReducers({
  currentUser,
  loginForm,
  waters: manageWaters
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store 