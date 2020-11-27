import React, { useState } from 'react';

const Nav = () => {
  const [shoppingCart, setShoppingCart] = useState(false);

  const handleShoppingCart = () => {
    setShoppingCart(!shoppingCart);
  };

  return (
    <>
      <nav>
        <div className="logo">

          Logo
        </div>

        <button type="button" onClick={handleShoppingCart}>
          ShoppingCard
        </button>

        {shoppingCart
          ? (
            <>
              <div className="shoppingCart">
                <ul>
                  <li>img</li>
                  <li>description</li>
                  <li>value</li>
                </ul>
                <ul className="shoppingCartValues">
                  <li>value</li>
                  <li>value</li>
                  <li>value</li>
                </ul>
              </div>

            </>
          )
          : ''}
      </nav>
    </>
  );
};

export default Nav;
