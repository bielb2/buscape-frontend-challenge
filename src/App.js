import React, { useState, useEffect } from 'react';
import './App.css';

import Cards from './components/Cards';

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [market, setMarket] = useState(false);
  console.log(market);

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

  const handleMarket = () => {
    setMarket(!market);
  };

  console.log(state);
  return (
    <>
      <nav>
        <div className="logo">

          Logo
        </div>

        <button type="button" onClick={handleMarket}>
          Market
        </button>

        {market
          ? (
            <>
              <div className="displayMarket">
                <div>
                  <h1>img</h1>
                  <h2>description</h2>
                  <h3>value</h3>
                </div>
                <div className="displayValue">
                  value
                  value
                  value
                </div>
              </div>

            </>
          )
          : ''}
      </nav>
      <header>
        <Cards data={state} />
      </header>
    </>
  );
}

export default App;
