import React from 'react';
import useRequest from '../hooks/useRequest';

import ProductCard from '../components/ProductCard/ProductCard';
import Nav from '../components/Navbar/Nav';

import '../styles/pages/home.css';

/** TODO
** Arrumar a formatação dos dados da dataResponse, setar um newDate aqui na home
** para facilitar na desestruturação e deixar os valores dinamicos (Moeda brasileira)
 */

const Home = () => {
  const { dataResponse } = useRequest('data.json');

  if (!dataResponse) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <header className="home-container">
        <Nav />
      </header>
      <main className="home-main-container">
        {dataResponse.map((product) => {
          return (
            <div key={product.product.id}>
              <ProductCard
                product={product}
              />
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Home;
