import React, { createContext, useContext, useState } from 'react';

import { convertValueToBrazilianCurrency } from '../hooks/useBrazilianCoin';

const ShoppingCartItemsContext = createContext();

export const useShoppingCartItems = () => {
  return useContext(ShoppingCartItemsContext);
};

export function ShoppingCartItemsProvider({ children }) {
  const [payload, setPayload] = useState([]);

  const handleLocalStoragePayload = () => {
    if (payload.length !== 0) {
      localStorage.setItem('@reactapp/payload', JSON.stringify(payload));
    }
  };

  const handleProductCartData = (data) => {
    const { images, name, price } = data.product;
    let { value, installments, installmentValue } = price;

    const brazilianCurrency = {
      value: convertValueToBrazilianCurrency(value),
      installmentValue: convertValueToBrazilianCurrency(installmentValue),
    };

    const productData = {
      images, name, installments, brazilianCurrency,
    };

    return productData;
  };

  const data = {
    payload,
    setPayload,
    handleLocalStoragePayload,
    handleProductCartData,
  };

  return (
    <ShoppingCartItemsContext.Provider value={data}>
      {children}
    </ShoppingCartItemsContext.Provider>
  );
}
