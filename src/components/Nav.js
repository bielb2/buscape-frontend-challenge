import React, { useState, useEffect } from 'react';
import Shopping from './Shopping';

const Nav = () => {
  const [shoppingCart, setShoppingCart] = useState(false);
  const [keysValues, setKeysValues] = useState([]);
  const [shopping, setShopping] = useState(false);

  const handleShoppingCart = () => {
    setShoppingCart(!shoppingCart);
  };

  const keys = Object.keys(localStorage);
  useEffect(() => {
    const myArray = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      myArray.push(JSON.parse(localStorage.getItem(keys[i]).split(',')));
    }
    setKeysValues(myArray);
  }, []);

  keysValues.map((options) => {
    return (
      <>
        <Shopping options={options} />
      </>
    );
  });

  return (
    <>
      <nav>
        <div className="logo">

          Logo
        </div>

        <button type="button" onClick={handleShoppingCart}>
          shoppingCart
        </button>
        <div className="shoppingCart">
          {shoppingCart
            ? (
              <>
                {keysValues.length !== 0
                  ? (
                    keysValues.map((options, index) => {
                      return (
                        <>
                          <Shopping options={options} />

                        </>
                      );
                    })
                  )
                  : <h1>Carrinho Vazio!</h1>}
              </>
            )
            : ''}
          {shoppingCart
            ? (
              <>
                {keysValues.length === localStorage.length && keysValues.length !== 0
                  ? (
                    <>
                      <div className="totalValue">
                        <div className="subTotal">
                          <h4>subtotal</h4>
                          <br />
                        </div>

                      </div>
                      <div className="totalValue">
                        <span>value</span>
                        <span>value</span>
                      </div>

                    </>
                  ) : ''}
              </>

            )
            : ''}
        </div>
      </nav>
    </>
  );
};

export default Nav;
