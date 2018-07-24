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
        <button onClick={ () => this.props.history.push('/task/create') }>Add New Task</button>
        {tasks}
      </div>
    );
  }
}

export default withRouter(Tasks);

