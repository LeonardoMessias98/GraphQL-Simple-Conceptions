const { usuarios } = require("../../data/db");
const { findIndex } = require("../../utils/findIndex");

module.exports = {
  usuario(_, { filtro }) {
    const usuarioIndex = findIndex(usuarios, filtro);

    return usuarios[usuarioIndex];
  },

  usuarios() {
    return usuarios;
  },
};
