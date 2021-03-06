import React, { Component } from 'react';
import './CourseCard.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCurrentCourse } from '../../actions/currentCourse';
import { COURSE_EDIT } from '../../constants/routes';

export class CourseCard extends Component {
  updateCourse = async () => {
    this.props.updateCurrentCourse(this.props);
    this.props.history.push(COURSE_EDIT);
  }

  editBtn = () => {
    return (
      <button 
        className="Course_edit-btn" 
        onClick={this.updateCourse}
      >Edit</button>
    );
  }

  viewBtn = () => {
    return <button className="Course_edit-btn">View</button>;
  }

  render() {
    const { user, name, description } = this.props;

    const adminEditBtn = this.editBtn();
    const courseViewBtn = this.viewBtn();

    return (
      <div className='course_card'>
        <div className='course_top'>
          <h2 className='Course_name'>{name}</h2>
          {user.roleId === 1 ? adminEditBtn : courseViewBtn}
        </div>
        <hr/>
        <p className='Course_desc'>{description}</p>
      </div>
    );
  }
}

CourseCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.object,
  updateCurrentCourse: PropTypes.func,
  history: PropTypes.object
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  updateCurrentCourse: (currentCourse) => {
    return dispatch(updateCurrentCourse(currentCourse));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CourseCard)
);
