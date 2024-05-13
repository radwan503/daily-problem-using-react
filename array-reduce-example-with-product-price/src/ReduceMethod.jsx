import React, { useState, useEffect } from 'react';

const ReduceMethod = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching data from the dummy JSON API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data?.products);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Calculate total price using reduce()
  const totalPrice = products.reduce((accumulator, product) => {
    return accumulator + parseFloat(product.price);
  }, 0);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <span>
              {product.title}: ${product.price}
            </span>
          </li>
        ))}
      </ul>
      <h2>Total Price of Products: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default ReduceMethod;
