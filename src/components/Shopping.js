import React from 'react';

const Shopping = ({ options }) => {
  const description = options[0];
  const value = options[1];
  const installments = options[2];
  const installmentValue = options[3];
  const img = options[4];
  return (
    <>
      {console.log(options)}
      <div className="shoppingCart">
        <ul>
          <li>
            <img src={img} alt={description} />
          </li>
          <li>{description}</li>
          <li>
            À vista
            {value}
          </li>
        </ul>
        <ul className="shoppingCartValues">
          <li>
            Ou
            {' '}
            {installments}
            x de
            {' '}
            {installmentValue}
          </li>
          <li>value</li>
          <li>value</li>
        </ul>
      </div>
    </>
  );
};

export default Shopping;
