import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/users/currentUser.js';
import WatersContainer from './containers/WatersContainer.js';
import NavBar from './components/users/NavBar.js';
import { Footer } from './components/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        { this.props.currentUser ? <h2>Welcome, { this.props.currentUser.attributes.username }</h2> : ""}
        <NavBar currentUser={this.props.currentUser}/>
        <WatersContainer />
        <Footer />
        <Router >
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/WatersContainer" component={WatersContainer} />
        </Router>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);