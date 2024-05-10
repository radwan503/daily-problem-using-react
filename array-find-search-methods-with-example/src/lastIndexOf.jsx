//LastIndexOfExample

import React, { useState } from 'react';

const LastIndexOfExample = () => {
  const [fruits, setFruits] = useState(['apple', 'banana', 'orange', 'banana']);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchIndex, setSearchIndex] = useState(-1);

  const handleSearch = () => {
    const index = fruits.lastIndexOf(searchTerm);
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
          {searchTerm} found at last index {searchIndex}
        </p>
      ) : (
        <p>{searchTerm} not found</p>
      )}
    </div>
  );
};

export default LastIndexOfExample;
