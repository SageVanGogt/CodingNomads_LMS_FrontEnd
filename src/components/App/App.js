import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from '../../constants/routes';
import LogIn from '../LogIn/LogIn';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route 
            exact path={routes.HOME}
            component={() => <p>REACT YO FACE!</p>}
          />

          <Route
            exact path={routes.SIGN_IN}
            component={() => <LogIn />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
