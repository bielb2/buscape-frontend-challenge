/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { Paper, Grid } from '@material-ui/core';
import { AiOutlineHeart } from 'react-icons/ai';

import { BrCoin } from '../BrCoin';

const ProductCard = ({
  dataItem, images, name, price,
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [activeImage, setActiveImage] = useState(true);

  let { value, installments, installmentValue } = price;
  value = BrCoin(value);
  installmentValue = BrCoin(installmentValue);

  const handleImageSrc = (e) => {
    e.preventDefault();
    setImageSrc(e.target);
    setActiveImage(false);
  };

  const handleLocalStorage = (e) => {
    localStorage.setItem(dataItem.product.id, JSON.stringify(dataItem));
    alert('Item adicionado com sucesso!');
    window.location.reload(true);
  };

  return (
    <>
      <Paper className="product-card-paper-container">
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item xs={2}>
            <Paper>
              {images.map((image, index) => {
                return (
                  <ul
                    key={`image ${index}`}
                    className="product-card-image-list-area"
                  >
                    <li>
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
                  </ul>
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="product-card-active-image-area">
              <img
                src={imageSrc.src
                  ? imageSrc.src
                  : images[0]}
                alt={name}
              />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper>
              <span className="product-card-span-title">
                {name}
              </span>
              <div className="product-card-better-price-area">
                <h3>Melhor preço</h3>
                <span className="product-card-heart-icon"><AiOutlineHeart /></span>
              </div>
              <div className="product-card-info-buy-area">
                <span className="product-card-installments">
                  {installments}
                  x
                </span>
                <span className="product-card-installments-real">R$</span>
                <span className="product-card-large-value">
                  {' '}
                  {' '}
                  {installmentValue}
                </span>
                <button
                  onClick={handleLocalStorage}
                  type="button"
                  className="product-card-cart-button"
                >
                  Adicionar ao carrinho

                  {' '}
                  {'>'}
                </button>
              </div>
              ou
              {' '}
              <span className="product-cart-small-green-value">
                R$
                {' '}
                {value}
              </span>
              {' '}
              à vista
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ProductCard;
