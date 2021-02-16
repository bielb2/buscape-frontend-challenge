import React, { useEffect } from 'react';
import useRequest from '../hooks/useRequest';
import { useShoppingCartItems } from '../context/ShoppingCartItems';

import ProductCard from '../components/ProductCard/ProductCard';
import Nav from '../components/Navbar/Nav';

import '../styles/pages/home.css';

const Home = () => {
  const { dataResponse } = useRequest('data.json');
  const { setPayload } = useShoppingCartItems();

  useEffect(() => {
    const handleLocalStorage = localStorage.getItem('@reactapp/payload');
    if (handleLocalStorage) {
      setPayload(JSON.parse(handleLocalStorage));
    }
  }, []);

  if (!dataResponse) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <header className="home-container">
        <Nav />
      </header>
      <main className="home-main-container">
        {dataResponse.map((product, index) => {
          return (
            <div key={index}>
              <ProductCard
                product={product.product}
              />
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Home;
