import './App.css';
import ProductList from './ProductList';

function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 },
    { id: 4, name: 'Headphones', price: 150 },
    { id: 5, name: 'Smartwatch', price: 300 },
  ];

  return (
    <div>
      <h1>E-commerce Store</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
