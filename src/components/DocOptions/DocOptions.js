import React from 'react';
import './DocOptions.css';
import PropTypes from 'prop-types';

export const DocOptions = ({ docs, handleSelectDoc, deleteDoc, id, doc }) => {
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
        value={doc && doc.topic} 
        onChange={(event) => handleSelectDoc(event)}
      >
        <option value='' disabled selected></option>
        { docOptions }
      </select>
      <button 
        onClick={(event) => deleteDoc(event, id)}
      >
        del
      </button>
    </div>
  );
};

DocOptions.propTypes = {
  handleSelectDoc: PropTypes.func,
  docs: PropTypes.array
};