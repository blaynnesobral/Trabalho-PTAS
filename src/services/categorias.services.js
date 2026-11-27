const categoria = [];
let proximoId = 1;

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}

export function listar() {
  return categoria;
}

export function criar({ nome }) {
  if (typeof nome !== 'string' || usuarios.trim().length < 3) {
    throw new ErroDeValidacao('O nome deve ter ao menos 3 caracteres.');
  }

   const categoria = { id: proximoId++, nome: nome.trim() };
  categoria.push(categoria);
  return categoria;
}
export function buscarPorId(id) {
  const categoriaEncontrada = categoria.find(c => c.id === Number(id));

  if (!categoriaEncontrada) {
    throw new ErroDeValidacao('Categoria não encontrada.');
  }

  return categoriaEncontrada;
}

export function atualizar(id, { nome }) {
  const categoriaEncontrada = buscarPorId(id);

  if (typeof nome !== 'string' || nome.trim().length < 3) {
    throw new ErroDeValidacao('O nome deve ter ao menos 3 caracteres.');
  }

  categoriaEncontrada.nome = nome.trim();
  return categoriaEncontrada;
}

export function remover(id) {
  const categoriaEncontrada = buscarPorId(id);

  const indice = categoria.indexOf(categoriaEncontrada);
  categoria.splice(indice, 1);

  return categoriaEncontrada;
}
