import React, { useState, useEffect } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import Shopping from './Shopping';

import '../../styles/components/navbar.css';
import { useShoppingCartItems } from '../../context/ShoppingCartItems';

const Nav = () => {
  const { payload } = useShoppingCartItems();

  const [localStoragePayloadData, setLocalStoragePayloadData] = useState([]);
  const [componentShoppingCart, setComponentShoppingCart] = useState(false);

  useEffect(() => {
    const handleLocalStorage = localStorage.getItem('@reactapp/payload');
    setLocalStoragePayloadData(JSON.parse(handleLocalStorage));
  }, [payload]);

  console.log(localStoragePayloadData);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <a href="#">
            <img alt="logo" src="https://s.zst.com.br/ais/_next/public/asteroid/buscape/logo-white.svg" />
          </a>
        </div>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setComponentShoppingCart(!componentShoppingCart)}

        >
          <AiOutlineMenu />
        </button>
        <div className="navbar-shopping-cart">
          {componentShoppingCart
            ? (
              <>
                {localStoragePayloadData.length !== 0
                  ? (
                    localStoragePayloadData.map((data) => {
                      return (
                        <>
                          <Shopping data={data} />

                        </>
                      );
                    })
                  )
                  : <h1>Carrinho Vazio!</h1>}
              </>
            )
            : ''}
          {componentShoppingCart
            ? (
              <>
                {localStoragePayloadData.length !== 0
                  ? (
                    <>
                      <div className="navbar-total-value-area">
                        <div className="navbar-subtotal-value">
                          <h4>subtotal</h4>
                          <br />
                        </div>

                      </div>
                      <div className="navbar-total-value">
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
