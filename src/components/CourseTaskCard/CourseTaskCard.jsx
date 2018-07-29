import React from 'react';
import './CourseTaskCard.css';

export const CourseTaskCard = (props) => {
  const {id, name, description} = props;

  const inputStyle = {
    'width': 10 + 'px',
    'float': 'right',
    'padding-right': 3 + 'px',
    'padding-top': 3 + 'px',
    'cursor': 'initial',
    'height': 10 + 'px',
    'margin': 0
  }
  
  return (
    <div className='CourseTaskCard' draggable onDragStart={(e) => console.log(e)}>
      <h4 title={description} display='inline-block'>{name}</h4>
      <input type='image' src="/button.png" style={inputStyle} onClick={() => console.log('hello')}/>
    </div>
  );
};