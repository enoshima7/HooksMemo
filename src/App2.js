import React, { useState, useCallback, useMemo } from 'react';
import { Increment } from './Increment';

const arr = [2, 1, 4, 3];
export const App2 = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  const getMax = useCallback((arr) => {
    console.log(1111);
    return arr.sort((a, b) => a - b)[arr.length - 1];
  }, []);

  const max = useMemo(() => getMax(arr), [arr, getMax]);
  return (
    <div>
      <Increment increment={increment} />
      <div>{count}</div>
      <div>
        <span>最大的数：</span>
        <span>{max}</span>
      </div>
    </div>
  );
};
