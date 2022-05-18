const { usuarios, generateId } = require("../../data/db");
const { findIndex } = require("../../utils/findIndex");

module.exports = {
  novoUsuario(_, { dados }) {
    const emailExistente = usuarios.some(
      (usuario) => usuario.email === dados.email
    );

    if (emailExistente) {
      throw new Error("E-mail cadastrado");
    }

    const novo = {
      id: generateId(),
      ...dados,
      perfil_id: 1,
      status: "ATIVO",
    };

    usuarios.push(novo);

    return novo;
  },

  alterarUsuario(_, { filtro, dados }) {
    const usuarioIndex = findIndex(usuarios, filtro);

    if (usuarioIndex < 0) return null;

    const usuario = {
      ...usuarios[usuarioIndex],
      ...dados,
    };

    usuarios.splice(usuarioIndex, 1, usuario);
    return usuario;
  },

  excluirUsuario(_, { filtro }) {
    const usuarioIndex = findIndex(usuarios, filtro);

    if (usuarioIndex < 0) return null;

    const excluidos = usuarios.splice(usuarioIndex, 1);

    return excluidos ? excluidos[0] : null;
  },
};
