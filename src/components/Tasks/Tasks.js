import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Tasks.css';
import TaskCard from '../TaskCard/TaskCard';
import { mockTasks } from '../../mockData/mockTasks';
import { TASKS_EDIT } from '../../constants/routes';
import { postTask } from '../../apiCalls/apiCalls';
import { updateCurrentTask } from '../../actions/currentTask'

export class Tasks extends Component {
  constructor() {
    super();
  }

  addTask = () => {
    // const newTask = await postTask()
    const newTask = {
      id: 1,
      name: '',
      description: '',
      videoLink: '',
      docs: [],
      labs: []
    };
    this.props.updateCurrentTask(newTask);

    this.props.history.push(TASKS_EDIT)
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

export const mapDispatchToProps = (dispatch) => ({
  updateCurrentTask: (currentTask) => dispatch(updateCurrentTask(currentTask))
})

export default withRouter(connect(null, mapDispatchToProps)(Tasks));

