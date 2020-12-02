import React, { useState, useEffect } from 'react';
import Shopping from './Shopping';

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

        {/* localStorage MAp
        {keysValues.map((options) => {
          return (
            <></>
          );
        })}
        {console.log(keysValues)} */}

        {shoppingCart
          ? (
            <>
              {keysValues.length !== 0
                ? (
                  keysValues.map((options) => {
                    return (
                      <>
                        <Shopping options={options} />
                      </>
                    );
                  })
                )
                : <div className="shoppingCart">Carrinho Vazio</div> }
            </>
          )
          : ''}
      </nav>
    </>
  );
};

export default Nav;
