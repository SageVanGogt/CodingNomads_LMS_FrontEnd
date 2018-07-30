import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from '../../constants/routes';
import LogIn from '../LogIn/LogIn';
import AdminHome from '../AdminHome/AdminHome';
import Courses from '../Courses/Courses';
import CourseCreate from '../CourseCreate/CourseCreate';
import Tasks from '../Tasks/Tasks';
import TaskEdit from '../TaskEdit/TaskEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="nav__site">
           <h3>Admin Home</h3>
            <ul aria-label="main navigation list">
              <li><a href="#"> Profile</a></li>
              <li><a href="#"> Students</a></li>
              <li><a href="#"> Courses</a></li>
              <li><a href="#"> Tasks</a></li>
              <li><a href="#"> Calendar</a></li>
            </ul>
          </nav>
          <Route
            exact path={routes.SIGN_IN}
            component={() => <LogIn />}
          />

          <Route
            exact path={routes.HOME}
            component={() => <AdminHome />}
          />

          <Route
            exact path={routes.COURSES}
            component={() => <Courses />}
          />
          <Route
            exact path={routes.TASKS}
            component={() => <Tasks />}
          />

          <Route
            exact path={routes.TASKS_EDIT}
            component={() => <TaskEdit />}
          />

          <Route
            exact path={routes.COURSE_EDIT}
            component={() => <CourseCreate />}
          />
        </div>
      </Router>
    );
  } 
}

export default App;
