import React from 'react';
import './ChosenDocs.css';
import PropTypes from 'prop-types';

export const ChosenDocs = ({docs, deleteChosenDoc}) => {
  const formattedChosenDocs = docs.map((doc, index) => {
    return (
      <div 
        key={`chose-doc-${index}`}
        className="Doc_chosen" 
        title={doc.link}
      >
        {doc.topic}
        <button onClick={(event) => deleteChosenDoc(event, doc.id)}>
          delete
        </button>
      </div>
    );
  });

  return (
    <ul>
      { formattedChosenDocs }
    </ul>
  );
};

ChosenDocs.propTypes = {
  docs: PropTypes.array,
  deleteChosenDoc: PropTypes.func
};