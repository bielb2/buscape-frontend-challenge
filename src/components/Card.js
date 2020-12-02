import React, { useState } from 'react';

import { Paper, Grid } from '@material-ui/core';

const Card = ({
  dataItem, images, name, price,
}) => {
  let { value, installments, installmentValue } = price;

  const [imageSrc, setImageSrc] = useState('');
  const [activeImage, setActiveImage] = useState(true);

  const handleImageSrc = (e) => {
    e.preventDefault();
    setImageSrc(e.target);
    setActiveImage(false);
  };

  // localStorage
  let myArray = [];
  myArray.push(name, value, installments, installmentValue, images[0], dataItem.product.id);

  const handleLocalStorage = (e) => {
    localStorage.setItem(dataItem.product.id, myArray);
    alert('Item adicionado com sucesso!');
    window.location.reload(true);
  };

  const brCoin = (coin) => {
    return coin.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  };
  value = brCoin(value);
  installmentValue = brCoin(installmentValue);

  return (
    <>
      <Paper className="paperContainer">
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item xs={2}>
            <Paper>
              <ul className="imgList">
                {images.map((image, index) => {
                  return (
                    <li key={image.id}>
                      <a href={image} onClick={handleImageSrc}>
                        {index === 0
                          ? (
                            <img
                              className={image === imageSrc.src || activeImage ? 'active' : ''}
                              onClick={handleImageSrc}
                              src={image}
                              alt={name}
                              onError={(e) => { e.target.onerror = null; e.target.src = 'https://ik.imagekit.io/b0g9wlasxh/buscape-images/images_ZDQgkWoQc.png'; }}
                            />
                          )
                          : (
                            <img
                              className={image === imageSrc.src ? 'active' : ''}
                              onClick={handleImageSrc}
                              src={image}
                              alt={name}
                              onError={(e) => { e.target.onerror = null; e.target.src = 'https://ik.imagekit.io/b0g9wlasxh/buscape-images/images_ZDQgkWoQc.png'; }}
                            />
                          )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="imgList">
              <img
                className="activeImage"
                src={imageSrc.src
                  ? imageSrc.src
                  : images[0]}
                alt={name}
              />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className="imgList">
              <h2>{name}</h2>
              <h3>Melhor preço</h3>
              <div className="productInfo">
                <span className="largeGreenValue">
                  {installments}
                  x de
                  {' '}
                  {installmentValue}
                </span>
                <button
                  onClick={handleLocalStorage}
                  type="button"
                  className="cart"
                >
                  Adicionar ao carrinho
                </button>
              </div>
              ou
              {' '}
              <span className="smallGreenValue">{value}</span>
              {' '}
              à vista
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Card;
