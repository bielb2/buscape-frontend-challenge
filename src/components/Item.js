import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Item = ({ data }) => {
  const [imageSrc, setImageSrc] = useState({});

  const handleImageSrc = (e) => {
    e.preventDefault();
    setImageSrc(e.target);
    console.log(e);
  };

  return (
    <>
      {data.map((dataItem) => {
        return (
          <>
            <Paper className="paperContainer">
              <Grid container wrap="nowrap" spacing={3}>
                <Grid item xs={2}>
                  <Paper>
                    <ul className="imgList">
                      {dataItem.product.images.map((image) => {
                        return (
                          <li key={image.id}>
                            <a href={image}>
                              <img
                                onClick={handleImageSrc}
                                src={image}
                                alt={dataItem.product.name}
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
                    {/* make a logic to verify if includes the current image on dataItem */}
                    <img
                      src={imageSrc.src
                        ? imageSrc.src
                        : dataItem.product.images[0]}
                      alt={imageSrc.alt}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={5}>
                  <Paper className="imgList">
                    <h2>{dataItem.product.name}</h2>
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
      })}

    </>
  );
};

export default Item;
