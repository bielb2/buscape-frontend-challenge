import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [shoppingCart, setShoppingCart] = useState(false);
  const [keysValues, setKeysValues] = useState([]);

  const handleShoppingCart = () => {
    setShoppingCart(!shoppingCart);
  };

  const keys = Object.keys(localStorage);
  useEffect(() => {
    const myArray = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      myArray.push(localStorage.getItem(keys[i]).split(','));
    }
    setKeysValues(myArray);
  }, []);

  return (
    <>
      <nav>
        <div className="logo">

          Logo
        </div>

        <button type="button" onClick={handleShoppingCart}>
          shoppingCart
        </button>

        {/* localStorage MAp */}
        {keysValues.map((options) => {
          return (
            <></>
          );
        })}

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
