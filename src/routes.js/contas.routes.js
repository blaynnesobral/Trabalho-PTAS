import { Router } from 'express';

const roteador = Router();

let conta = [
    { id: 1, usuarioId: 1, nome: "Conta principal", saldo: 1000 },
    { id: 2, usuarioId: 2, nome: "Conta principal", saldo: 500 }
];

roteador.get('/', (req, res) => {
    res.json(conta);
});

roteador.post('/', (req, res) => {
    const novaConta = {
        id: conta.length + 1,
        nome: req.body.nome,
        saldo: req.body.saldo
    };

    conta.push(novaConta);

    res.status(201).json(novaConta);
});

roteador.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const conta = conta.find(c => c.id === id);

    if (!conta) {
        return res.status(404).json({
            erro: "Conta não encontrada"
        });
    }

    res.json(conta);
});

export default roteador;