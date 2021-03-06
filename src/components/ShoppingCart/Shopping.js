import React, { useState } from 'react';

import { BsTrash } from 'react-icons/bs';

import CountUp from 'react-countup';
import { useShoppingCartItems } from '../../context/ShoppingCartItems';

import Dialogs from '../Dialogs';

const ShoppingCart = () => {
  const { payload, getBalance, handleRemoveItem } = useShoppingCartItems();
  const { totalValue, installmentTotalValue } = getBalance();

  const [dialogState, setDialogState] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);

  const handleDialog = (product) => {
    setDialogState(true);
    setCurrentProduct(product);
  };

  if (payload.length) {
    return (
      <>
        <ul className="navbar-cart-value fadeIn">
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
                  x de R$
                  {' '}
                  {product.price.installmentValue}
                  <br />
                  ou R$
                  {' '}
                  {product.price.value}
                  {' '}
                  à vista
                </h4>
              </li>

              <button
                type="button"
                className="navbar-remove-item-button"
                onClick={() => handleDialog(product)}
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
                duration={1.5}
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
        {dialogState && (
        <Dialogs
          dialogState={dialogState}
          setDialogState={setDialogState}
          handleFunction={() => handleRemoveItem({
            currentProductId: currentProduct.id,
          })}
          product={currentProduct}
        />
        )}
      </>
    );
  }

  return (
    <h1>Carrinho vazio</h1>
  );
};

export default ShoppingCart;
