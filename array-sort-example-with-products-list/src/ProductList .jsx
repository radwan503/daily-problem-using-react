import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 30 },
    { id: 3, name: 'Product C', price: 80 },
    // Additional product objects...
  ]);

  const sortByPrice = () => {
    const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const sortByName = () => {
    const sortedProducts = products
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  };

  // Response to the comment

  return (
    <div className="product-list">
      <button onClick={sortByPrice}>Sort by Price</button>
      <button onClick={sortByName}>Sort by Name</button>

      <ul className="product-items">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.name}</span> -{' '}
            <span className="product-price">${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
