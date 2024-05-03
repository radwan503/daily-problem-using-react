import React from 'react';

const PatternGenerator = () => {
  // Create an array of length 10 and fill it with the pattern [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const patternArray = new Array(10).fill().map((_, index) => index);

  return (
    <div>
      <h2>Pattern Generator</h2>
      <ul>
        {patternArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatternGenerator;
