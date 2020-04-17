import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { UserContext } from './UserContext';
export const App4 = () => {
  const [msg, setMsg] = useState('hello from context');
  const providerValue = useMemo(() => ({ msg, setMsg }), [msg, setMsg]);
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>

      <UserContext.Provider value={providerValue}>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </UserContext.Provider>
    </Router>
  );
};
