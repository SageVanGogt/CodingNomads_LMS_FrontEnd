import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Students.css';
import * as API from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

export class Students extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Students_page">
      </div>
    );
  }
}

export default Students;
