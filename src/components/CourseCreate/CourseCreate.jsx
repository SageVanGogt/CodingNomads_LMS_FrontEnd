import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mockTasks } from '../../mockData/mockTasks';
import './CourseCreate.css';
import PropTypes from 'prop-types';
import * as apiCalls from '../../apiCalls/apiCalls';

export class CourseCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      tasks: [],
      students: [],
      tasksToDelete: [],
      labsToDelete: []
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  fetchTasks = () => {
    // const tasks = await apiCalls.getAllTasks();
    const formattedTasks = this.formatTaskOptions(mockTasks);
    return formattedTasks;
  }

  formatTaskOptions = (tasks) => {
    //should selecting a doc activate a function sending it to state?
    //how should we store multiple doc choices?
    const allTaskOptions = tasks.map((task, index) => {
      return (
        <option
          key={`task-${index}`}
          name="task"
          onClick={() => this.handleTaskSelect(task)}>
          {task.name}
        </option>
      );
    });
    return allTaskOptions;
  }

  handleTaskSelect = task => {
    if (!this.state.tasks.includes(task)) {
      this.setState({
        tasks: [...this.state.tasks, task]
      });
    }
  }

  render() {
    const tasks = this.fetchTasks();

    return (
      <div className="CourseCreate_page">
        <form action="submit" className="CourseCreate_form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <select name="" id="">
            {tasks}
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CourseCreate;