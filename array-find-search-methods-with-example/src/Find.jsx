//find() example

import React, { useState } from 'react';

const UserSearch = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Emily' },
    { id: 3, name: 'Michael' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const foundUser = users.find((user) => user.name === searchTerm);
    setSearchResult(foundUser);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult ? (
        <p>User found: {searchResult.name}</p>
      ) : (
        <p>No matching user found</p>
      )}
    </div>
  );
};

export default UserSearch;
