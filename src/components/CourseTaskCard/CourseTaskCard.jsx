import React from 'react';
import './CourseTaskCard.css';
import PropTypes from 'prop-types';

export const CourseTaskCard = (props) => {
  const {id, name, description} = props;

  return (
    <div 
      className='CourseTaskCard' 
      draggable 
    >
      <h4 
        title={description} 
        display='inline-block'>{name}
      </h4>
      <img 
        src="/button.png" 
        alt="delete task"
        onClick={() => props.deleteTask(id)}
      />
    </div>
  );
};

CourseTaskCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  deleteTask: PropTypes.func
};
