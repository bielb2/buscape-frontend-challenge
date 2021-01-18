/* eslint-disable  */
import React from 'react';
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
    <header>
      <Nav />
      {dataResponse.map((dataItem, index) => {
        const { images, name, price } = dataItem.product;
        return (
          <main key={`product ${index}`}>
            <ProductCard
              dataItem={dataItem}
              images={images}
              name={name}
              price={price}
            />
          </main>
        );
      })}
    </header>

  );
};

export default Home;
