import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from '../../constants/routes';
import LogIn from '../LogIn/LogIn';
import AdminHome from '../AdminHome/AdminHome';
import { Courses } from '../Courses/Courses';
import Tasks from '../Tasks/Tasks';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="nav__site">
            <article className="user" aria-label="user profile">
              <img src="" alt="user profile image"/>
              <p aria-label="user profile name">Coconut Head</p>
            </article>
            <hr/>
            <h3>Main</h3>
            <ul aria-label="main navigation list">
              <li><a href="#"> Profile</a></li>
              <li><a href="#"> Students</a></li>
              <li><a href="#"> Courses</a></li>
              <li><a href="#"> Tasks</a></li>
              <li><a href="#"> Calendar</a></li>
            </ul>
          </nav>
          <Route 
            exact path={routes.HOME}
            component={() => <p>REACT YO FACE!</p>}
          />

          <Route
            exact path={routes.SIGN_IN}
            component={() => <LogIn />}
          />

          <Route
            exact path={routes.ADMIN_HOME}
            component={() => <AdminHome />}
          />

          <Route
            exact path={routes.COURSES}
            component={() => <Courses />}
          />
          <Route
            exact path={routes.TASK_VIEW}
            component={() => <Tasks />}
          />
        </div>
      </Router>
    );
  } 
}

export default App;
