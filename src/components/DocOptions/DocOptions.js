import React from 'react';
import './DocOptions.css';
import PropTypes from 'prop-types';

export const DocOptions = (props) => {
  const { docs, handleSelectDoc, deleteDoc, id, docSelected } = props;
  const docOptions = docs.map((doc, index) => {
    return (
      <option
        key={`doc-${index}`}
        name="documentation"
        value={doc.id}
      >
        {doc.topic}
      </option>
    );
  });

  return (
    <div>
      <select
        name=""
        className="DocOptions_select"
        value={docSelected && docSelected.id}
        onChange={(event) => handleSelectDoc(event)}
      >
        <option value='' selected></option>
        { docOptions }
      </select>
      <img
        src="/button.png"
        className="DocOptions_delete"
        alt="delete doc"
        onClick={(event) => deleteDoc(event, id)}
      />
    </div>
  );
};

DocOptions.propTypes = {
  handleSelectDoc: PropTypes.func,
  deleteDoc: PropTypes.func,
  docs: PropTypes.array,
  id: PropTypes.number,
  docSelected: PropTypes.object
};
