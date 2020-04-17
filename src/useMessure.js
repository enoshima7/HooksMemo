import { useLayoutEffect, useState } from 'react';
export const useMessure = (ref, deps) => {
  const [rect, setRect] = useState({});
  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect());
  }, deps);
  return rect;
};
