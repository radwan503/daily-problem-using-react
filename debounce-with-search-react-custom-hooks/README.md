- Demo:https://stackblitz.com/edit/vitejs-vite-mneyrt?file=src%2FuseDebounce.jsx

▶ Debounce with Search
Debouncing is a technique used to limit the rate at which a function is invoked. In the context of search functionality, debounce can be incredibly useful. When a user types into a search bar, it triggers a function to update the search results. However, if this function is invoked every time a keystroke occurs, it can lead to performance issues, especially if the search involves fetching data from a server.

Debounce works by introducing a delay before invoking the function. When the user types, the function is not immediately executed. Instead, debounce waits for a specified amount of time (the debounce period) to pass after the last keystroke before executing the function. If another keystroke occurs within this period, the timer resets. This ensures that the function is only called once the user has stopped typing, reducing unnecessary calls and improving performance.

▶ Why Use Debounce:

1️⃣ Performance Optimization: By reducing the number of function calls, debounce helps improve the performance of search functionality, especially in cases where there's network latency involved.

2️⃣ User Experience: Debounce creates a smoother user experience by preventing rapid updates to the search results while the user is still typing. It allows the user to finish typing before displaying the results.

3️⃣ Reduced Server Load: Debounce helps reduce the load on the server by batching requests. Instead of sending a request for every keystroke, it waits until the user pauses typing, then sends a single request with the final search query.

- Radwan Ahmed 🚀 

`
import React, { useState } from 'react';
import useDebounce from './useDebounce'; // Import the custom debounce hook

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch search results from dummy API
  const fetchSearchResults = async (query) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await response.json();
      setSearchResults(data?.products);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Custom debounce hook to debounce the fetchSearchResults function
  const debouncedSearch = useDebounce(fetchSearchResults, 500); // Debounce period of 500 milliseconds

  // Function to handle input change
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    debouncedSearch(value); // Call the debounced search function
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      <ul className="search-results">
        {searchResults?.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;



//Note:
This custom debounce hook provided you a good starting point, but there are a few improvements for best practices.

//Simple Custom Debunce hooks
import { useEffect, useState } from 'react';

// Custom debounce hook
const useDebounce = (callback, delay) => {
  const [debouncedCallback, setDebouncedCallback] = useState(callback);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCallback(() => callback);
    }, delay);

    // Cleanup function to clear the timeout
    return () => clearTimeout(handler);
  }, [callback, delay]);

  return debouncedCallback;
};

export default useDebounce;
`