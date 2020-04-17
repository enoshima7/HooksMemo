import React, { useRef } from 'react';

export const Increment = React.memo(({ increment }) => {
  const render = useRef(0);
  console.log('renders:', render.current++);
  return (
    <div>
      <button onClick={increment}>PLUS</button>
    </div>
  );
});
