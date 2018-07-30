
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Students.css';
import * as API from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

export class StudentsEdit extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="StudentsEdit_page">
        <form type="submit" className="StudentsEdit_form">

        </form>
      </div>
    );
  }
}

export default StudentsEdit
