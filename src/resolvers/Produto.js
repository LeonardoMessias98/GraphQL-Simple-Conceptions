module.exports = {
  precoComDesconto(produto) {
    return produto.preco - (produto.desconto / 100) * produto.preco;
  },
};
