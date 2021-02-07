export const convertValueToBrazilianCurrency = (currencies) => {
  return currencies.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
};
