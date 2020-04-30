import React from 'react';
import Login from './components/Login.js'
// import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Water</h1>
        </header>
        <Login />
      </div>
    )
  }
}