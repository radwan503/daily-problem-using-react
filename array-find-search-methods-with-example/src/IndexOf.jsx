//IndexOf() Example

import React, { useState } from 'react';

const IndexOfExample = () => {
  const [fruits, setFruits] = useState(['apple', 'banana', 'orange', 'banana']);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchIndex, setSearchIndex] = useState(-1);

  const handleSearch = () => {
    const index = fruits.indexOf(searchTerm);
    setSearchIndex(index);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchIndex !== -1 ? (
        <p>
          {searchTerm} found at index {searchIndex}
        </p>
      ) : (
        <p>{searchTerm} not found</p>
      )}
    </div>
  );
};

export default IndexOfExample;
