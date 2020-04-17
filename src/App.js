import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useFetch } from './useFetch';
import { useMessure } from './useMessure';

const App = () => {
  const [values, setValues] = useForm({ email: '', password: '' });
  const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count')),
  );
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);
  const { message, loading } = useFetch(
    `http://numbersapi.com/${count}/trivia`,
  );
  const inputRef = useRef();
  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);
  const hello = useRef(() => {
    console.log('111');
  });

  const mesRef = useRef();
  const rect = useMessure(mesRef, [message]);
  return (
    <div className='App'>
      <p ref={mesRef}>{loading ? 'loading...' : message}</p>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setShowHello(!showHello);
        }}
      >
        toggle
      </button>
      {showHello && <Hello />}
      <input
        type='email'
        name='email'
        value={values.email}
        onChange={setValues}
        ref={inputRef}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={setValues}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        blur
      </button>
    </div>
  );
};

export default App;
