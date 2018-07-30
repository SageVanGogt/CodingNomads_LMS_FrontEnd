import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { func } from 'prop-types';
import './Tasks.css';
import TaskCard from '../TaskCard/TaskCard';
import { TASKS_EDIT } from '../../constants/routes';
import { getAllTasks } from '../../apiCalls/apiCalls';

export class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: []
    };
  }

  componentDidMount = async () => {
    const allTasks = await getAllTasks();
    this.setState({ allTasks: allTasks.data });
  }

  addTask = () => {
    this.props.history.push(TASKS_EDIT);
  }

  render() {
    const tasks = this.state.allTasks.map((task, index) => {
      return (
        <TaskCard
          key={`task-card-${index}`}
          {...task}
        />
      );
    });

    return (
      <div className="Task_container">
        <button
          className="Task_new"
          onClick={ this.addTask }
        >
          New Task +
        </button>
        <section className="Task_cards">
          { tasks }
        </section>
      </div>
    );
  }
}

export default withRouter(Tasks);

