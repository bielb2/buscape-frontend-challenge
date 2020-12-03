export const BrCoin = (coin) => {
  return coin.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};
