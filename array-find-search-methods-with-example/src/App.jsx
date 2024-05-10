import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProductList from './FindIndex';

import UserSearch from './Find';
import IndexOfExample from './IndexOf';
import LastIndexOfExample from './lastIndexOf';
import IncludesExample from './Includes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductList />
      <IncludesExample />
      <UserSearch />
      <IndexOfExample />
      <LastIndexOfExample />
    </>
  );
}

export default App;
