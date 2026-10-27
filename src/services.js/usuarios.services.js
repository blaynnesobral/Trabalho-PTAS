const usuarios = [];
let proximoId = 1;

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}

export function listar() {
  return usuarios;
}

export function criar({ nome }) {
  if (typeof nome !== 'string' || usuarios.trim().length < 3) {
    throw new ErroDeValidacao('O nome deve ter ao menos 3 caracteres.');
  }

  if (typeof email !== 'string' || usuarios.trim().length < 3) {
    throw new ErroDeValidacao('E-mail inválido!.');
  }
   const usuarios = { id: proximoId++, nome: nome.trim(), email: email.trim() };
  usuarios.push(usuarios);
  return usuarios;
}
