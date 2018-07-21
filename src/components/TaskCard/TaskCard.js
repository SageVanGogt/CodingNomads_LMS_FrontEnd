
import React, { Component} from 'react';
import { connect } from 'react-redux';
import './TaskCard.css';
import PropTypes from 'prop-types';

export class TaskCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { id, name, description } = this.props;

    return (
      <div className="Task_card">
        <h3 className="Task_name">{name}</h3>
        <hr/>
        <p className="Task_desc">
          {description}
        </p>
      </div>
    );
  }
}

TaskCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string
};

export default TaskCard;