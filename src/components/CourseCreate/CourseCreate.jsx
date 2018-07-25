import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mockTasks } from '../../mockData/mockTasks';
import './CourseCreate.css';
import PropTypes from 'prop-types';
import * as apiCalls from '../../apiCalls/apiCalls';
import { CourseTaskCard } from '../CourseTaskCard/CourseTaskCard';

export class CourseCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      tasks: [],
      students: [],
      tasksToDelete: [],
      labsToDelete: [],
      allTasks: []
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  fetchTasks = async () => {
    // const tasks = await apiCalls.getAllTasks();
    this.setState({allTasks: [{name: 'Select Task'}, ...mockTasks]});  //normally tasks
  }
  
  handleTaskSelect = (e) => {
    const task = this.state.allTasks.find(task => task.name === e.target.value);
    if (!this.state.tasks.includes(task)) {
      this.setState({
        tasks: [...this.state.tasks, task]
      });
    }
  }

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    const tasks = this.state.allTasks.map((task, index) => {
      return (
        <option
          key={`task-${index}`}
          name="task"
          title={task.description}>
          {task.name}
        </option>
      );
    });

    return (
      <div className="CourseCreate_page">
        <h1>Edit course</h1>
        <form 
          action="submit" 
          className="CourseCreate_form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <h2>Tasks</h2>
          <div className='tasksArea'>
            {
              this.state.tasks.map((task, index) => {
                return <CourseTaskCard {...task} key={`task-${index}`}/>;
              })
            }
          </div>
          <span>Add task: </span>
          <select
            onChange={(e) => this.handleTaskSelect(e)}
          >
            {tasks}
          </select>
          <button type="submit">Submit Course</button>
        </form>
      </div>
    );
  }
}

export default CourseCreate;