const { perfis } = require("../../data/db");
const { findIndex } = require("../../utils/findIndex");

let id = 3;

const generateId = () => id++;

module.exports = {
  criarPerfil(_, { dados }) {
    const perfil = {
      id: generateId(),
      ...dados,
    };

    if (perfil) perfis.push(perfil);

    return perfil;
  },

  alterarPerfil(_, { filtro, dados }) {
    const perfilIndex = findIndex(perfis, filtro);

    if (perfilIndex < 0) return null;

    const perfil = {
      ...perfis[perfilIndex],
      ...dados,
    };

    perfis.slice(perfilIndex, 1, perfil);
    return perfil;
  },

  excluirPerfil(_, { filtro }) {
    const perfilIndex = findIndex(perfis, filtro);

    if (perfilIndex < 0) return null;

    perfis.splice(perfilIndex, 1);

    return perfis ? perfis[0] : null;
  },
};
