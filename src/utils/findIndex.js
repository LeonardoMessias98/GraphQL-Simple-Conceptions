function findIndex(array, filtro) {
  if (!filtro) return -1;

  const { id, email } = filtro;

  if (id) return array.findIndex((each) => each.id === id);
  else if (email) return array.findIndex((each) => each.email === email);

  return -1;
}

module.exports = { findIndex };
