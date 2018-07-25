import React from 'react';
import './CourseTaskCard.css';

export const CourseTaskCard = (props) => {
  const {id, name, description} = props;

  return (
    <div className='CourseTaskCard'>
      <h4 title={description}>{name}</h4>
    </div>
  );
};