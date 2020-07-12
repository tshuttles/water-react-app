import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store.js';
import App from './App.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  <Router>

  </Router>,
  document.getElementById('root')
);