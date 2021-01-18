import { useEffect, useState } from 'react';

export default function useRequest(json) {
  const [dataResponse, setDataResponse] = useState();

  useEffect(() => {
    const getDataFromJson = async () => {
      await fetch(json, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).then((res) => res.json())
        .then((res) => setDataResponse(res.items));
    };

    getDataFromJson();
  }, [json]);

  return { dataResponse };
}
