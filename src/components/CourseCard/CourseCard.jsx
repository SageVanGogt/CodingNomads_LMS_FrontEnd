import React, { Component } from 'react';
import './CourseCard.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class CourseCard extends Component {
  constructor(props) {
    super(props);
  }

  editBtn = () => {
    return <button className="Course_edit-btn">Edit</button>;
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
        <h2>{name}</h2>
        {user.roleId === 1 ? adminEditBtn : courseViewBtn}
        <hr/>
        <p>{description}</p>
      </div>
    );
  }
}

CourseCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.object
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(CourseCard);