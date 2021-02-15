import React from 'react';
import { useShoppingCartItems } from '../../context/ShoppingCartItems';

const ShoppingCart = () => {
  const { payload } = useShoppingCartItems();

  const handleRemoveItem = (id) => {
    localStorage.removeItem(id);
    alert('Item removido!');
    window.location.reload(true);
  };

  if (payload.length) {
    return (
      <>
        <ul className="navbar-cart-value">
          {payload.map((product) => (
            <div key={product.product.id}>
              <li>
                <img src={product.product.images[0]} alt={product.product.name} />
              </li>
              <li className="navbar-product-info">
                <h4 className="navbar-shopping-title">
                  {product.product.name}
                </h4>
                <h4 className="navbar-shopping-value">
                  {product.product.price.installments}
                  x de
                  {' '}
                  R$
                  {' '}
                  {product.product.price.installmentValue}
                  <br />
                  ou
                  {' '}
                  R$
                  {' '}
                  {product.product.price.value}
                  {' '}
                  à vista

                </h4>
              </li>
              <button
                type="button"
                className="navbar-remove-item-button"
                onClick={() => handleRemoveItem(product.product.id)}
              >
                X
              </button>
            </div>
          ))}

        </ul>
      </>
    );
  }

  return (
    <h1>Carrinho vazio</h1>
  );
};

export default ShoppingCart;
