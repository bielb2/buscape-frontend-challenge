import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {
  return (
    <>
      {data.map((dataItem) => {
        const { images, name, price } = dataItem.product;
        return (
          <Card images={images} name={name} price={price} />
        );
      })}
    </>
  );
};

export default Cards;
