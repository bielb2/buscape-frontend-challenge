import React from 'react';

import { BrCoin } from './BrCoin';

const Shopping = ({ options }) => {
  const { images, name, price } = options.product;

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
      <ul className="shoppingCartValues">
        <li>
          <img src={images[0]} alt={name} />
        </li>
        <li className="productInfo">
          <h4 className="shoppingName">
            {name}
          </h4>
          <h4 className="shoppingValue">
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
          className="removeItem"
          onClick={() => handleRemoveItem(options.product.id)}
        >
          X
        </button>
      </ul>

    </>
  );
};

export default Shopping;
