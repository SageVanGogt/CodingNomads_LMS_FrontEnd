import React from 'react';
import './DocOptions.css';
import PropTypes from 'prop-types';

export const DocOptions = ({ docs, handleSelectDoc, deleteDoc, id, docSelected }) => {
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
        onClick={(event) => deleteDoc(event, id)}
      />
    </div>
  );
};

DocOptions.propTypes = {
  handleSelectDoc: PropTypes.func,
  docs: PropTypes.array
};
