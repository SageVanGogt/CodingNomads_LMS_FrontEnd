import React from 'react';
import './LabOptions';
import PropTypes from 'prop-types';

export const LabOptions = ({ labs, handleSelectLab }) => {
  console.log(labs)
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