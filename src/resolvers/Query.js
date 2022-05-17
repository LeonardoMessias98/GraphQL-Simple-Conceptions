const { usuarios, perfis, produto } = require("../data/db");

module.exports = {
  usuarioLogado() {
    return usuarios[0];
  },
  produtoEmDestaque() {
    return produto;
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const sels = usuarios.filter((u) => u.id === id);
    return sels ? sels[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const sels = perfis.filter((u) => u.id === id);
    return sels ? sels[0] : null;
  },
};
