import React, { useState } from 'react';

const ColorPalette = () => {
  const [gridColors, setGridColors] = useState(Array(25).fill('#ffffff'));

  const changeAllCellColors = () => {
    const randomColor = () =>
      '#' + Math.floor(Math.random() * 1000).toString(16); // random color generate

    console.log(randomColor());
    const updatedColors = Array(25).fill().map(randomColor);
    setGridColors(updatedColors);
  };

  const handleReset = () => {
    setGridColors(Array(25).fill('#ffffff'));
  };

  return (
    <div>
      <div
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 50px)',
          gap: '2px',
        }}
      >
        {gridColors.map((color, index) => (
          <div
            key={index}
            className="cell"
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              border: '1px solid black',
              cursor: 'pointer',
            }}
          ></div>
        ))}
      </div>
      <button onClick={() => changeAllCellColors('#00ff00')}>
        Change All Colors
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ColorPalette;
