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

  const handlePayloadShoppingCart = ({ currentProduct }) => {
    setPayload((prevstate) => [...prevstate, currentProduct]);
  };

  const handleRemoveItem = ({ currentProductId }) => {
    const filteredProducts = payload.filter((product) => product.id !== currentProductId);
    setPayload(filteredProducts);

    if (payload.length === 1 || filteredProducts.length === 0) {
      localStorage.removeItem('@reactapp/payload');
    }
  };

  const convertCalculableValue = (reducePayload) => {
    const convertTotalValue = reducePayload.price.value.replace('.', '');
    const convertInstallmentValue = reducePayload.price.installmentValue.replace('.', '');
    const calculableTotalValue = parseFloat(convertTotalValue.replace(',', '.'));
    const calculableInstallmentValue = parseFloat(convertInstallmentValue.replace(',', '.'));

    return { calculableTotalValue, calculableInstallmentValue };
  };

  const getBalance = () => {
    const { totalValue, installmentTotalValue } = payload.reduce(
      (accumlator, payloadArray) => {
        const {
          calculableTotalValue,
          calculableInstallmentValue,
        } = convertCalculableValue(payloadArray);

        accumlator.totalValue += calculableTotalValue;
        accumlator.installmentTotalValue += calculableInstallmentValue;

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
