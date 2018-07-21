import React, { Component} from 'react';
import { connect } from 'react-redux';
import './Tasks.css';
import TaskCard from './../TaskCard/TaskCard';
import { mockTasks } from './../../mockData/mockTasks';

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
        {tasks}
      </div>
    );
  }
}

export default Tasks;

