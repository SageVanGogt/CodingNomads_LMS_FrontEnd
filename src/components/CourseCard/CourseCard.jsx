import React, { Component } from 'react';
import './CourseCard.css';
import PropTypes from 'prop-types';

export class CourseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='course_card'>
        <h2>{this.props.name}</h2>
        <hr/>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

CourseCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};