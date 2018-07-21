import React, { Component } from 'react';
import './CourseCard.css';

export class CourseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}