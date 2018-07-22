
import React, { Component} from 'react';
import { connect } from 'react-redux';
import './TaskCreate.css';
import PropTypes from 'prop-types';
import { mapStateToProps } from '../TaskCard/TaskCard';

export class TaskCreate extends Component {
  constructor() {
    super();
    this.state = {
      topic: '',
      videoLink: '',
      description: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="TaskCreate_page">
        <form action="submit" className="TaskCreate_form">
          <input 
            type="text" 
            placeholder="topic" 
            name="topic"
            onChange={this.handleChange}
            value={this.state.topic}
          />
          <input 
            type="text" 
            placeholder="description" 
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <input 
            type="text" 
            placeholder="url" 
            name="videoLink"
            onChange={this.handleChange}
            value={this.state.videoLink}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default TaskCreate;