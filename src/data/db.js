const perfis = [
  { id: 1, nome: "comum" },
  { id: 2, nome: "administrador" },
];

const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "jsilva@gmail.com",
    ano_nasc: 1988,
    perfil_id: 1,
    status: "ATIVO",
  },
  {
    id: 12,
    nome: "Rafael Junior",
    email: "rjunior@gmail.com",
    ano_nasc: 1985,
    perfil_id: 2,
    status: "INATIVO",
  },
  {
    id: 13,
    nome: "Daniela Smith",
    email: "dsmith@gmail.com",
    ano_nasce: 1997,
    perfil_id: 1,
    status: "BLOQUEADO",
  },
];

const produto = {
  id: "2",
  nome: "Samsung Galaxy s20FE Snapdragon",
  preco: 2.399,
  desconto: 20,
};

module.exports = { produto, usuarios, perfis };
