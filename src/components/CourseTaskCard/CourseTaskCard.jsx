import React from 'react';
import './CourseTaskCard.css';

export const CourseTaskCard = (props) => {
  const {id, name, description} = props;

  return (
    <div className='CourseTaskCard' draggable onDragStart={(e) => console.log(e)}>
      <h4 title={description} display='inline-block'>{name}</h4>
      <img src="/button.png" onClick={() => props.deleteTask(id)}/>
    </div>
  );
};