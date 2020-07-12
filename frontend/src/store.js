import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from './reducers/users/users.js';
import currentUser from './reducers/users/currentUser.js';
import loginForm from './reducers/users/loginForm.js';
import manageWaters from './reducers/waters/manageWaters.js';

const reducer = combineReducers({
  users: usersReducer, 
  currentUser,
  loginForm,
  waters: manageWaters
})

const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store 