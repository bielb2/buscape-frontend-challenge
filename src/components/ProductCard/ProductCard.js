import React, { useState } from 'react';

import { Paper, Grid } from '@material-ui/core';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { useShoppingCartItems } from '../../context/ShoppingCartItems';

import '../../styles/components/product-card.css';
import Alert from '../Alert';

const ProductCard = ({
  product,
}) => {
  const [alertState, setAlertState] = useState(false);

  const { handlePayloadShoppingCart } = useShoppingCartItems();
  const [imageIndex, setImageIndex] = useState(0);
  const [heartActive, setHeartActive] = useState(false);

  const handleActiveImage = (event, index) => {
    event.preventDefault();
    setImageIndex(index);
  };

  const handleAddProduct = () => {
    handlePayloadShoppingCart({
      currentProduct: product,
    });
    setAlertState(true);
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
                {product.images.map((image, index) => {
                  return (
                    <div key={`image ${index}`}>
                      <li>
                        <a href={image} onClick={(event) => handleActiveImage(event, index)}>
                          <img
                            className={index === imageIndex ? 'active' : null}
                            src={image}
                            alt={product.name}
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
                src={product.images[imageIndex]}
                alt={product.name}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://ik.imagekit.io/b0g9wlasxh/buscape-images/images_ZDQgkWoQc.png'; }}
              />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper>
              <span className="product-card-span-title">
                {product.name}
              </span>
              <div className="product-card-better-price-area">
                <h3>Melhor preço</h3>
                <span className="product-card-heart-icon">
                  {heartActive
                    ? (
                      <AiFillHeart
                        className="product-card-active-heart"
                        color="#ff0d0d"
                        onClick={() => setHeartActive(false)}
                      />
                    )
                    : <AiOutlineHeart onClick={() => setHeartActive(true)} />}
                </span>
              </div>
              <div className="product-card-info-buy-area">
                <span className="product-card-installments">
                  {product.price.installments}
                  x
                </span>
                <span className="product-card-installments-real">R$</span>
                <span className="product-card-large-value">
                  {' '}
                  {' '}
                  {product.price.installmentValue}
                </span>
                <button
                  onClick={handleAddProduct}
                  type="button"
                  className="product-card-cart-button"
                >
                  Adicionar ao carrinho
                  {' '}
                  {'>'}
                </button>
                {alertState && (
                <Alert
                  severity="success"
                  alertState={alertState}
                  setAlertState={setAlertState}
                >
                  Sucesso! Item adicionado ao carrinho.
                </Alert>
                )}
              </div>
              ou
              {' '}
              <span className="product-cart-small-green-value">
                R$
                {' '}
                {product.price.value}
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
