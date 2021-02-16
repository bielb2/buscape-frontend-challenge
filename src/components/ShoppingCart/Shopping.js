import React, { useState } from 'react';

import { BsTrash } from 'react-icons/bs';

import { Popconfirm } from 'antd';
import CountUp from 'react-countup';
import { useShoppingCartItems } from '../../context/ShoppingCartItems';
import { convertValueToBrazilianCurrency } from '../../hooks/useBrazilianCoin';

const ShoppingCart = () => {
  const { payload, setPayload, getBalance } = useShoppingCartItems();

  const { totalValue, installmentTotalValue } = getBalance();
  console.log(totalValue.toString(), installmentTotalValue);

  const handleRemoveItem = (id) => {
    const removeItem = payload.filter((product) => product.id !== id);
    setPayload(removeItem);
    if (payload.length === 1 || removeItem.length === 0) {
      localStorage.removeItem('@reactapp/payload');
    }
  };

  if (payload.length) {
    return (
      <>
        <ul className="navbar-cart-value">
          {payload.map((product, index) => (
            <div key={index}>
              <li>
                <img src={product.images[0]} alt={product.name} />
              </li>
              <li className="navbar-product-info">
                <h4 className="navbar-shopping-title">
                  {product.name}
                </h4>
                <h4 className="navbar-shopping-value">
                  {product.price.installments}
                  x de
                  {' '}
                  R$
                  {' '}
                  {product.price.installmentValue}
                  <br />
                  ou
                  {' '}
                  R$
                  {' '}
                  {product.price.value}
                  {' '}
                  à vista

                </h4>
              </li>

              <button
                type="button"
                className="navbar-remove-item-button"
                onClick={() => handleRemoveItem(product.id)}
              >
                <BsTrash color="#cc0000" title="Excluir produto" size={18} />
              </button>
            </div>
          ))}

        </ul>
        <div className="navbar-total-value-area">
          <div>
            <h5>subtotal</h5>
          </div>
          <div>
            <strong>
              10X R$
              {' '}
              <CountUp
                end={installmentTotalValue}
                duration={1}
                decimals={2}
                decimal=","
              />
            </strong>
            <strong>
              ou R$
              {' '}
              <CountUp
                end={totalValue}
                duration={3}
                decimals={2}
                decimal=","
              />
              {' '}
              à vista
            </strong>

          </div>
        </div>
      </>
    );
  }

  return (
    <h1>Carrinho vazio</h1>
  );
};

export default ShoppingCart;
