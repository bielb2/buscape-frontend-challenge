import React from 'react';
import useRequest from '../hooks/useRequest';
import Card from './Card';

const Cards = ({ data }) => {
  const { dataResponse } = useRequest('data.json');

  if (dataResponse === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <header>

      {dataResponse.map((dataItem) => {
        const { images, name, price } = dataItem.product;
        return (
          <Card dataItem={dataItem} images={images} name={name} price={price} />
        );
      })}
    </header>
  );
};

export default Cards;
