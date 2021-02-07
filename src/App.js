import React from 'react';
import Home from './pages/Home';

import { ShoppingCartItemsProvider } from './context/ShoppingCartItems';

import './styles/global.css';

function App() {
  return (
    <ShoppingCartItemsProvider>
      <Home />
    </ShoppingCartItemsProvider>
  );
}

export default App;
