import { useEffect, useState } from 'react';

import { convertValueToBrazilianCurrency } from './useBrazilianCoin';

export default function useRequest(json) {
  const [dataResponse, setDataResponse] = useState([]);

  const handleDataResponse = (response) => {
    response.forEach((_, index) => {
      response[index].product.price.value = convertValueToBrazilianCurrency(
        response[index].product.price.value,
      );

      response[index].product.price.installmentValue = convertValueToBrazilianCurrency(
        response[index].product.price.installmentValue,
      );
    });
    setDataResponse(response);
  };

  useEffect(() => {
    const getDataFromJson = async () => {
      await fetch(json, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).then((res) => res.json())
        .then((res) => handleDataResponse(res.items));
    };

    getDataFromJson();
  }, [json]);

  return { dataResponse };
}
