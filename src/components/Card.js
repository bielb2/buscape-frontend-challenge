/* eslint-disable no-sequences */
import React, { useState } from 'react';

import { Paper, Grid } from '@material-ui/core';

const Card = ({ images, name, price }) => {
  const [imageSrc, setImageSrc] = useState('');

  const handleImageSrc = (e) => {
    e.preventDefault();
    setImageSrc(e.target);
    console.log(e);
  };

  return (
    <>
      <Paper className="paperContainer">
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item xs={2}>
            <Paper>
              <ul className="imgList">
                {images.map((image) => {
                  return (
                    <li key={image.id}>
                      <a href={image} onClick={handleImageSrc}>
                        <img
                          className={image === imageSrc.src ? 'active' : ''}
                          onClick={handleImageSrc}
                          src={image}
                          alt={name}
                          onError={(e) => { e.target.onerror = null; e.target.src = 'https://ik.imagekit.io/b0g9wlasxh/buscape-images/images_ZDQgkWoQc.png'; }}
                        />
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
                alt={imageSrc.alt}
              />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className="imgList">
              <h2>{name}</h2>
              <h3>Better price</h3>
              <div className="priceValue">
                <span className="value">10x R$ 134,11</span>
                <button type="button" className="cardAdd">
                  Adicionar ao carrinho
                </button>
              </div>
              ou
              {' '}
              <span className="greenValue">R$ 1.139</span>
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
