let id = 1;

const generateId = () => id++;

const perfis = [
  { id: 1, nome: "comum" },
  { id: 2, nome: "administrador" },
];

const usuarios = [
  {
    id: generateId(),
    nome: "João Silva",
    email: "jsilva@gmail.com",
    ano_nasc: 1988,
    perfil_id: 1,
    status: "ATIVO",
  },
  {
    id: generateId(),
    nome: "Rafael Junior",
    email: "rjunior@gmail.com",
    ano_nasc: 1985,
    perfil_id: 2,
    status: "INATIVO",
  },
  {
    id: generateId(),
    nome: "Daniela Smith",
    email: "dsmith@gmail.com",
    ano_nasce: 1997,
    perfil_id: 1,
    status: "BLOQUEADO",
  },
];

module.exports = { usuarios, perfis, generateId };
