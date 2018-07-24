import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Tasks.css';
import TaskCard from '../TaskCard/TaskCard';
import { mockTasks } from '../../mockData/mockTasks';

export class Tasks extends Component {
  constructor() {
    super();
  }

  addTask() {
    // post new task
    // get taskId from response
    // update store

    this.props.history.push('/tasks/edit')
  }

  render() {
    const tasks = mockTasks.map((task, index) => {
      return (
        <TaskCard 
          key={`task-card-${index}`}
          {...task} 
        />
      );
    });

    return (
      <div className="Task_container">
        <button onClick={ this.addTask }>Add New Task</button>
        {tasks}
      </div>
    );
  }
}

export default withRouter(Tasks);

