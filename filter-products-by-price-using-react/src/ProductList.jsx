import React, { useState } from 'react';

const ProductList = ({ products }) => {
  // State for managing the price filter
  const [priceFilter, setPriceFilter] = useState('');

  // Function to handle price filter change
  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  // Filtered products based on price
  const filteredProducts = products.filter((product) => {
    // Assuming each product has a "price" property
    return product.price <= parseInt(priceFilter); // Filter products cheaper than or equal to the selected price
  });

  return (
    <div>
      <h2>Product List</h2>
      <input
        type="number"
        placeholder="Filter by price"
        value={priceFilter}
        onChange={handlePriceFilterChange}
      />
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found matching the filter criteria.</p>
      )}
    </div>
  );
};

export default ProductList;
