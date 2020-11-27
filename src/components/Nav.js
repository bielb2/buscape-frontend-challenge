import React, { useState } from 'react';

const Nav = () => {
  const [shoppingCart, setShoppingCart] = useState(false);
  console.log(shoppingCart);

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
                <div>
                  <h1>img</h1>
                  <h2>description</h2>
                  <h3>value</h3>
                </div>
                <div className="shoppingCartValues">
                  value
                  value
                  value
                </div>
              </div>

            </>
          )
          : ''}
      </nav>
    </>
  );
};

export default Nav;
