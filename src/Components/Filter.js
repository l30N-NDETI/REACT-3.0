// src/Filter.js
import React from 'react';

const Filter = ({ title, rating, setTitle, setRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
