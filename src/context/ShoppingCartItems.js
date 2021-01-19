import React, { createContext, useContext, useState } from 'react';

const ShoppingCartItemsContext = createContext();

export default function ShoppingCartItemsProvider({ children }) {
  const [payload, setPayload] = useState([]);

  if (payload) {
    localStorage.setItem('@reactapp/payload', JSON.stringify(payload));
  }

  return (
    <ShoppingCartItemsContext.Provider value={{
      payload,
      setPayload,
    }}
    >
      {children}
    </ShoppingCartItemsContext.Provider>
  );
}

export function useShoppingCartItems() {
  const context = useContext(ShoppingCartItemsContext);
  const { payload, setPayload } = context;
  return { payload, setPayload };
}
