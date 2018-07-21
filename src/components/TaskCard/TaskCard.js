
import React, { Component} from 'react';
import { connect } from 'react-redux';
import './TaskCard.css';
import PropTypes from 'prop-types';

export class TaskCard extends Component {
  constructor() {
    super();
  }

  editOption = () => {
    return <button className="Task_edit-btn">edit</button>;
  }

  render() {
    const { id, name, description, user } = this.props;
    const adminEditBtn = this.editOption();

    return (
      <div className="Task_card">
        <h3 className="Task_name">{name}</h3>
        {user.roleId === 1 && adminEditBtn}
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


TaskCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.object
};

export default connect(mapStateToProps, null)(TaskCard);