import React from 'react';
import './LabOptions.css';
import PropTypes from 'prop-types';

export const LabOptions = ({ labs, handleSelectLab, deleteLab, id, labSelected }) => {
  const labOptions = labs.map((lab, index) => {
    return (
      <option
        key={`lab-${index}`}
        name="lab"
        title={lab.description}
        value={lab.id}
      >
        {lab.name}
      </option>
    );
  });

  return (
    <div>
      <select
        className="LabOptions_select"
        name=""
        value={labSelected && labSelected.id}
        onChange={(event) => handleSelectLab(event)}
      >
        <option value='' disabled selected></option>
        { labOptions }
      </select>
      <button
        className="LabOptions_delete"
        onClick={(event) => deleteLab(event, id)}
      >
        X
      </button>
    </div>
  );
};

LabOptions.propTypes = {
  handleSelectLab: PropTypes.func,
  labs: PropTypes.array
};
