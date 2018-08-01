import React, { Component} from 'react';
import { connect } from 'react-redux';
import './TaskCard.css';
import PropTypes from 'prop-types';
import { updateCurrentTask } from '../../actions/currentTask';
import { TASKS_EDIT } from '../../constants/routes';
import { withRouter } from 'react-router-dom';

export class TaskCard extends Component {
  handleSelectTaskToEdit = () => {
    const {
      id,
      name,
      description,
      videoLink,
      docs,
      labs,
      updateCurrentTask,
      history } = this.props;
    const currentTask = {
      id,
      name,
      description,
      videoLink,
      docs,
      labs
    };
    updateCurrentTask(currentTask);
    history.push(TASKS_EDIT);
  }

  editBtn = () => {
    return (
      <button
        className="Task_edit-btn"
        onClick={this.handleSelectTaskToEdit}
      >
        edit
      </button>
    );
  }

  render() {
    const { name, description, user } = this.props;
    const adminEditBtn = this.editBtn();

    return (
      <div className="Task_card">
        <div className="Task_top">
          <h3 className="Task_name">{name}</h3>
          {adminEditBtn}
        </div>
        <hr/>
        <p className="Task_desc">
          {description}
        </p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  updateCurrentTask: (currentTask) => dispatch(updateCurrentTask(currentTask))
});

TaskCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskCard));
