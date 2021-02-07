import React from 'react';
import { useShoppingCartItems } from '../../context/ShoppingCartItems';

const Shopping = ({ data }) => {
  const { payload } = useShoppingCartItems();

  const { images, name, price } = data.product;

  let { value, installments, installmentValue } = price;

  const handleRemoveItem = (id) => {
    localStorage.removeItem(id);
    alert('Item removido!');
    window.location.reload(true);
  };

  // useEffect(() => {
  //   const handleLocalStorage = localStorage.getItem('@reactapp/payload');
  //   setLocalStoragePayloadData(JSON.parse(handleLocalStorage));
  // }, [payload]);

  // const [localStoragePayloadData, setLocalStoragePayloadData] = useState([]);

  //   <>
  //     {localStoragePayloadData.length !== 0
  //       ? (
  //         localStoragePayloadData.map((data) => {
  //           return (
  //             <>
  //               <Shopping data={data} />

  //             </>
  //           );
  //         })
  //       )
  //       : <h1>Carrinho Vazio!</h1>}
  //   </>

  return (
    <>
      <ul className="navbar-cart-value">
        <li>
          <img src={images[0]} alt={name} />
        </li>
        <li className="navbar-product-info">
          <h4 className="navbar-shopping-title">
            {name}
          </h4>
          <h4 className="navbar-shopping-value">
            {installments}
            x de
            {' '}
            R$
            {' '}
            {installmentValue}
            <br />
            ou
            {' '}
            R$
            {' '}
            {value}
            {' '}
            à vista

          </h4>
        </li>
        <button
          type="button"
          className="navbar-remove-item-button"
          onClick={() => handleRemoveItem(data.product.id)}
        >
          X
        </button>
      </ul>

    </>
  );
};

export default Shopping;
