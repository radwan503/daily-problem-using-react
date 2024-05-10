import React, { useState } from 'react';

const IncludesExample = () => {
  const [fruits, setFruits] = useState(['apple', 'banana', 'orange', 'banana']);
  const [searchTerm, setSearchTerm] = useState('');
  const [isIncluded, setIsIncluded] = useState(false);

  const handleSearch = () => {
    const found = fruits.includes(searchTerm);
    setIsIncluded(found);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {isIncluded ? (
        <p>{searchTerm} is included in the fruits list.</p>
      ) : (
        <p>{searchTerm} is not found in the fruits list.</p>
      )}
    </div>
  );
};

export default IncludesExample;
