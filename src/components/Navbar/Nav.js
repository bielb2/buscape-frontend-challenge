import React, { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import Shopping from './Shopping';

import '../../styles/components/navbar.css';

const Nav = () => {
  const [componentShoppingCart, setComponentShoppingCart] = useState(false);

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
            && <Shopping /> }
        </div>
      </nav>
    </>
  );
};

export default Nav;
