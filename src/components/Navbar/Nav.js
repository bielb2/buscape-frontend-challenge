import React, { useState } from 'react';

import { FiShoppingCart } from 'react-icons/fi';
import ShoppingCart from '../ShoppingCart/Shopping';
import { useShoppingCartItems } from '../../context/ShoppingCartItems';

import '../../styles/components/navbar.css';

const Nav = () => {
  const [componentShoppingCart, setComponentShoppingCart] = useState(false);

  const { payload } = useShoppingCartItems();

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
          <FiShoppingCart />
          {payload.length
            ? (<span>{payload.length}</span>)
            : null }

        </button>
        <div className="navbar-shopping-cart">
          {componentShoppingCart
            && <ShoppingCart /> }
        </div>
      </nav>
    </>
  );
};

export default Nav;
