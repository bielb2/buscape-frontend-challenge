import React, { useState, useEffect } from 'react';

import { Paper, Grid } from '@material-ui/core';

import { AiOutlineHeart } from 'react-icons/ai';
import { useShoppingCartItems } from '../../context/ShoppingCartItems';

import '../../styles/components/product-card.css';

const ProductCard = ({
  product,
}) => {
  const { setPayload, handleLocalStoragePayload, handleProductCartData } = useShoppingCartItems();
  const [imageIndex, setImageIndex] = useState(0);

  const {
    images, name, installments, brazilianCurrency,
  } = handleProductCartData(product);

  const handlePayload = () => {
    setPayload((prevstate) => [...prevstate, product]);
    handleLocalStoragePayload();
  };

  const handleActiveImage = (event, index) => {
    event.preventDefault();
    setImageIndex(index);
  };

  return (
    <>
      <Paper className="product-card-paper-container">
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item xs={2}>
            <Paper>
              <ul
                className="product-card-image-list-area"
              >
                {images.map((image, index) => {
                  return (
                    <div key={`image ${index}`}>
                      <li>
                        <a href={image} onClick={(event) => handleActiveImage(event, index)}>
                          <img
                            className={index === imageIndex ? 'active' : null}
                            src={image}
                            alt={name}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://ik.imagekit.io/b0g9wlasxh/buscape-images/images_ZDQgkWoQc.png'; }}
                          />
                        </a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="product-card-active-image-area">
              <img
                src={images[imageIndex]}
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
                  {brazilianCurrency.installmentValue}
                </span>
                <button
                  onClick={handlePayload}
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
                {brazilianCurrency.value}
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
