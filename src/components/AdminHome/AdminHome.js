import React, { Component} from 'react';
import { connect } from 'react-redux';
import './AdminHome.css';
import { Link } from 'react-router-dom';

export class AdminHome extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Teacher_home">
        <nav className="nav__site">
          <article className="user" aria-label="user profile">
            <img src="" alt="user profile image"/>
            <p aria-label="user profile name">Coconut Head</p>
          </article>
          <hr/>
          <h3>Main</h3>
          <ul aria-label="main navigation list">
            <li><a href="#"> home</a></li>
            <li><a href="#"> jobs</a></li>
            <li><a href="#"> resumes</a></li>
            <li><a href="#"> task</a></li>
            <li><a href="#"> calendar</a></li>
          </ul>
        </nav>
        <section className="Teacher_board">
          <article className="Teacher_view">
            <h3>courses</h3>
            <div className="Teacher_options">
              <div>add</div>
              <div>view</div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>notifications</h3>
            <div className="Teacher_options">
              <div>add</div>
              <div>view</div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>tasks</h3>
            <div className="Teacher_options">
              <div>add</div>
              <div>view</div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>students</h3>
            <div className="Teacher_options">
              <div>add</div>
              <div>view</div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default AdminHome;