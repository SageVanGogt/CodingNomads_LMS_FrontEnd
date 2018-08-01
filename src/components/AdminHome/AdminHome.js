import React, { Component} from 'react';
import { connect } from 'react-redux';
import './AdminHome.css';
import { Redirect, withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import PropTypes from 'prop-types';

export class AdminHome extends Component {
  handleRoute = (event) => {
    const { id } = event.target;

    this.props.history.push(routes[id]);
  }

  render() {
    if (this.props.user === null) {
      return <Redirect to={routes.SIGN_IN} />;
    }

    return (
      <div className="Teacher_home-container">
        <section className="Teacher_board">
          <article className="Teacher_view">
            <h3>courses</h3>
            <div className="Teacher_options">
              <div 
                className="add-btn" 
                id="COURSE_EDIT"
                onClick={this.handleRoute}
              >
                +
              </div>
              <div
                className="view-btn"
                id="COURSES"
                onClick={this.handleRoute}
              >
                <img 
                  alt='loading'
                  src="/eye.png"
                />
              </div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>notifications</h3>
            <div className="Teacher_options">
              <div 
                className="add-btn" 
              >
                +
              </div>
              <div
                className="view-btn"
              >
                <img 
                  alt='loading'
                  src="/eye.png"
                />
              </div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>tasks</h3>
            <div className="Teacher_options">
              <div 
                className="add-btn" 
                id="TASKS_EDIT"
                onClick={this.handleRoute}
              >
                +
              </div>
              <div
                className="view-btn"
                id="TASKS"
                onClick={this.handleRoute}
              >
                <img 
                  alt='loading'
                  src="/eye.png"
                />
              </div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>students</h3>
            <div className="Teacher_options">
              <div 
                className="add-btn" 
                id="STUDENT_EDIT"
                onClick={this.handleRoute}
              >
                +
              </div>
              <div
                className="view-btn"
                id="STUDENTS"
                onClick={this.handleRoute}
              >
                <img 
                  alt='loading'
                  src="/eye.png"
                />
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

AdminHome.propTypes = {
  user: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(AdminHome));
