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
  if (typeof nome !== 'string' || titulo.trim().length < 3) {
    throw new ErroDeValidacao('O título deve ter ao menos 3 caracteres.');
  }
 
   const usuarios = { id: proximoId++, nome: nome.trim(), email: email.trim() };
  usuarios.push(usuarios);
  return usuarios;
}
let usuarios = [
    { id: 1, nome: "João", email: "joao@gmail.com" },
    { id: 2, nome: "Maria", email: "maria@gmail.com" }
];