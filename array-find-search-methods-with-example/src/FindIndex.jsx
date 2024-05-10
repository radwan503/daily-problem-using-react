//findIndex() Example

import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Tablet' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const index = products.findIndex((product) => product.name === searchTerm);
    if (index !== -1) {
      setSearchResult(products[index]);
    } else {
      setSearchResult(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Laptop,Tablet"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult ? (
        <p>Found: {searchResult.name}</p>
      ) : (
        <p>No matching product found</p>
      )}
    </div>
  );
};

export default ProductList;
