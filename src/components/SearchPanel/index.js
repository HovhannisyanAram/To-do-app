import React from 'react';

import './index.css';

const SearchPanel = ({ value, onSearchChange }) => (
  <input
    value={value}
    placeholder="search"
    className="form-control search-input"
    onChange={({ target: { value } }) => onSearchChange(value)}
  />
);

export default SearchPanel;