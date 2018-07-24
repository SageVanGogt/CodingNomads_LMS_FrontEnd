import React from 'react';
import './DocOptions.css';
import PropTypes from 'prop-types';

export const DocOptions = ({ docs, handleSelectDoc }) => {
  const docOptions = docs.map((doc, index) => {
    return (
      <option 
        key={`doc-${index}`} 
        name="documentation"
        onClick={() => handleSelectDoc(doc)}
      >
        {doc.topic}
      </option>
    );
  });

  return (
    <select name="" id="">
      { docOptions }
    </select>
  );
};

DocOptions.propTypes = {
  handleSelectDoc: PropTypes.func,
  docs: PropTypes.array
};