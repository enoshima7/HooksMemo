import React, { useEffect, useRef } from 'react';

export const Hello = () => {
  const render = useRef(0);
  console.log('ref', render.current++);
  useEffect(() => {
    console.log('render');
    return () => {
      console.log('unmount');
    };
  }, []);
  return <div>Hello</div>;
};
