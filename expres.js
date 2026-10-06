const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let usuarios = [
    { id: 1, nome: "João", email: "joao@gmail.com" },
    { id: 2, nome: "Maria", email: "maria@gmail.com" }
];

app.get("/", (req, res) => {
    res.send("API de Controle Financeiro funcionando!");
});

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.post("/usuarios", (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

app.get("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.json(usuario);
});
let contas = [
    { id: 1, usuarioId: 1, nome: "Conta principal", saldo: 1000 },
    { id: 2, usuarioId: 2, nome: "Conta principal", saldo: 500 }
];

app.get("/contas", (req, res) => {
    res.json(contas);
});

app.post("/contas", (req, res) => {
    const novaConta = {
        id: contas.length + 1,
        usuarioId: req.body.usuarioId,
        nome: req.body.nome,
        saldo: req.body.saldo
    };

    contas.push(novaConta);

    res.status(201).json(novaConta);
});

app.get("/contas/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const conta = contas.find(c => c.id === id);

    if (!conta) {
        return res.status(404).json({
            erro: "Conta não encontrada"
        });
    }

    res.json(conta);
});