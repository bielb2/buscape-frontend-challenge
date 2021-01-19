import React, { useContext } from 'react';
import useRequest from '../hooks/useRequest';

import ProductCard from '../components/ProductCard/ProductCard';
import Nav from '../components/Navbar/Nav';

import '../styles/pages/home.css';

const Home = () => {
  const { dataResponse } = useRequest('data.json');

  if (dataResponse === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <header className="home-container">
      <Nav />
      <main className="home-main-container">
        {dataResponse.map((product, index) => {
          return (
            <div key={`product ${index}`}>
              <ProductCard
                product={product}
              />
            </div>
          );
        })}
      </main>
    </header>

  );
};

export default Home;
