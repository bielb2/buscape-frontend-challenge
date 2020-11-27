import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';

import Cards from './components/Cards';

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data.json', {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => res.json())
      .then((res) => setState(res.items),
        setLoading(false));
  }, []);

  if (state.length === 0 || loading) {
    return <h1>Carregando</h1>;
  }

  console.log(state);
  return (
    <>
      <Nav />
      <header>
        <Cards data={state} />
      </header>
    </>
  );
}

export default App;
