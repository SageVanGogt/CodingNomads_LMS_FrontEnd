import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import './Tasks.css';
import TaskCard from '../TaskCard/TaskCard';
import { TASKS_EDIT } from '../../constants/routes';
import { getAllTasks } from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

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
      this.state.allTasks.length ? 
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
        :
        <div className="Task_container">
          <img 
            height='200' 
            width='200' 
            alt="loading"
            src='/loading1.gif' 
          />
        </div>
    );
  }
}

Tasks.propTypes = {
  history: PropTypes.object
};

export default withRouter(Tasks);

