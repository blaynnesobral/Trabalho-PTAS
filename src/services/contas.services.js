const conta = [];
let proximoId = 1;

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}

export function listar() {
  return conta;
}

export function criar({ usuarioId }) {
  if (typeof usuarioId !== 'string' || conta.trim().length < 3) {
    throw new ErroDeValidacao('Usuario em valido!.');
  }
  if (typeof nome !== 'string' || conta.trim().length < 3) {
    throw new ErroDeValidacao('Nome inválido!.');
  }
  if (typeof saldo !== 'string' || conta.trim().length < 3) {
    throw new ErroDeValidacao('Saldo invalido!.');
  }
   const conra = { id: proximoId++, usuarioId: usuarioId.trim(), nome: nome.trim(), saldo: saldo.trim() };
  conta.push(conta);
  return conta;
}
