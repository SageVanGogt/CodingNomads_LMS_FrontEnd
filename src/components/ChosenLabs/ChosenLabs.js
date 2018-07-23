import React from 'react';
import './ChosenLabs.css';
import PropTypes from 'prop-types';

export const ChosenLabs = ({labs, deleteChosenLab}) => {
  const formattedChosenLabs = labs.map((lab, index) => {
    return (
      <div 
        key={`chose-lab-${index}`}
        className="Lab_chosen" 
        title={lab.description}
      >
        {lab.name}
        <button onClick={(event) => deleteChosenLab(event, lab.id)}>
          delete
        </button>
      </div>
    );
  });

  return (
    <ul>
      { formattedChosenLabs }
    </ul>
  );
};

ChosenLabs.propTypes = {
  labs: PropTypes.array,
  deleteChosenLab: PropTypes.func
};