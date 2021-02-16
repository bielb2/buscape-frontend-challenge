/* eslint-disable no-param-reassign */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';

const ShoppingCartItemsContext = createContext();

export const useShoppingCartItems = () => {
  return useContext(ShoppingCartItemsContext);
};

export function ShoppingCartItemsProvider({ children }) {
  const [payload, setPayload] = useState([]);

  const handlePayloadShoppingCart = (product) => {
    setPayload((prevstate) => [...prevstate, product]);
  };

  const handleRemoveItem = (id) => {
    const filteredItems = payload.filter((product) => product.id !== id);
    setPayload(filteredItems);
    if (payload.length === 1 || filteredItems.length === 0) {
      localStorage.removeItem('@reactapp/payload');
    }
  };

  const getBalance = () => {
    const { totalValue, installmentTotalValue } = payload.reduce(
      (accumlator, payloadArray) => {
        const totalCalculationValue = payloadArray.price.value.replace('.', '');
        const installmentCalculationValue = payloadArray.price.installmentValue.replace('.', '');
        accumlator.totalValue += parseFloat(totalCalculationValue.replace(',', '.'));
        accumlator.installmentTotalValue += parseFloat(installmentCalculationValue.replace(',', '.'));

        return accumlator;
      },
      {
        totalValue: 0,
        installmentTotalValue: 0,
      },
    );

    return { totalValue, installmentTotalValue };
  };

  useEffect(() => {
    localStorage.setItem('@reactapp/payload', JSON.stringify(payload));
  }, [payload.length]);

  const data = {
    payload,
    setPayload,
    handlePayloadShoppingCart,
    handleRemoveItem,
    getBalance,
  };

  return (
    <ShoppingCartItemsContext.Provider value={data}>
      {children}
    </ShoppingCartItemsContext.Provider>
  );
}
