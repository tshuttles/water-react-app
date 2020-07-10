import React from 'react';
import Login from './components/users/Login.js';
import WatersContainer from './containers/WatersContainer.js';
// import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Water</h1>
        </header>
        <Login />
        <WatersContainer />
      </div>
    )
  }
}