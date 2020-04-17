import React, { useContext } from 'react';
import { UserContext } from './UserContext';
export const Home = () => {
  const { msg, setMsg } = useContext(UserContext);
  return (
    <div>
      <p>Home</p>
      <p>{msg}</p>
      <button
        onClick={() => {
          setMsg('key');
        }}
      >
        change
      </button>
    </div>
  );
};
