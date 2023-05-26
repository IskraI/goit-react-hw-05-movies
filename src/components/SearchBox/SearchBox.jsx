import React from 'react';

import { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputSubmit = event => setSearchQuery(event.target.value);
  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleInputSubmit}
        value={searchQuery}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
