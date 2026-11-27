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
   const conta = { id: proximoId++, usuarioId: usuarioId.trim(), nome: nome.trim(), saldo: saldo.trim() };
  conta.push(conta);
  return conta;
}
export function buscarPorId(id) {
  return conta.find(c => c.id === Number(id));
}

export function atualizar(id, dados) {
  const contaEncontrada = buscarPorId(id);

  if (!contaEncontrada) {
    throw new ErroDeValidacao('Conta não encontrada!.');
  }

  Object.assign(contaEncontrada, dados);
  return contaEncontrada;
}

export function remover(id) {
  const indice = conta.findIndex(c => c.id === Number(id));

  if (indice === -1) {
    throw new ErroDeValidacao('Conta não encontrada!.');
  }

  return conta.splice(indice, 1);
}
