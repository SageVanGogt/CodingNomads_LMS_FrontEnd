import React from 'react';
import './LabOptions';
import PropTypes from 'prop-types';

export const LabOptions = ({ labs, handleSelectLab }) => {
  const labOptions = labs.map((lab, index) => {
    return (
      <option 
        key={`lab-${index}`} 
        name="lab"
        title={lab.description}
        onClick={() => handleSelectLab(lab)}
      >
        {lab.name}
      </option>
    );
  });

  return (
    <select name="" id="">
      { labOptions }
    </select>
  );
};

LabOptions.propTypes = {
  handleSelectLab: PropTypes.func,
  labs: PropTypes.array
};