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