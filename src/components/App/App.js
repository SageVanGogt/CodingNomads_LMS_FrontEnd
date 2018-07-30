import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import LogIn from '../LogIn/LogIn';
import AdminHome from '../AdminHome/AdminHome';
import Courses from '../Courses/Courses';
import CourseCreate from '../CourseCreate/CourseCreate';
import Tasks from '../Tasks/Tasks';
import TaskEdit from '../TaskEdit/TaskEdit';
import StudentsEdit from '../Students/Students';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="nav__site">
           <h3>Coding Nomads</h3>
            <ul aria-label="main navigation list">
              <li><Link to={routes.TASKS}> Profile</Link></li>
              <li><Link to={routes.STUDENTS_EDIT}> Students</Link></li>
              <li><Link to={routes.COURSES}> Courses</Link></li>
              <li><Link to={routes.TASKS}> Tasks</Link></li>
              <li><Link to={routes.TASKS}> Calendar</Link></li>
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

          <Route
            exact path={routes.STUDENTS_EDIT}
            component={() => <StudentsEdit />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
