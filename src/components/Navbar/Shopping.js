import React from 'react';

import { BrCoin } from '../BrCoin';

const Shopping = ({ data }) => {
  console.log(data);
  const { images, name, price } = data.product;

  let { value, installments, installmentValue } = price;

  value = BrCoin(value);
  installmentValue = BrCoin(installmentValue);

  const handleRemoveItem = (id) => {
    localStorage.removeItem(id);
    alert('Item removido!');
    window.location.reload(true);
  };

  return (
    <>
      <ul className="navbar-cart-value">
        <li>
          <img src={images[0]} alt={name} />
        </li>
        <li className="navbar-product-info">
          <h4 className="navbar-shopping-title">
            {name}
          </h4>
          <h4 className="navbar-shopping-value">
            {installments}
            x de
            {' '}
            R$
            {' '}
            {installmentValue}
            <br />
            ou
            {' '}
            R$
            {' '}
            {value}
            {' '}
            à vista

          </h4>
        </li>
        <button
          type="button"
          className="navbar-remove-item-button"
          onClick={() => handleRemoveItem(data.product.id)}
        >
          X
        </button>
      </ul>

    </>
  );
};

export default Shopping;
