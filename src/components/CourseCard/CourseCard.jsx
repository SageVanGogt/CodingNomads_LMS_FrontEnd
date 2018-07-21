import React, { Component } from 'react';
import './Course_Card.css';

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