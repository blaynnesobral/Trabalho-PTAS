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
let categorias = [
    { id: 1, nome: "Alimentação" },
    { id: 2, nome: "Transporte" },
    { id: 3, nome: "Salário" }
];

app.get("/categorias", (req, res) => {
    res.json(categorias);
});

app.post("/categorias", (req, res) => {
    const novaCategoria = {
        id: categorias.length + 1,
        nome: req.body.nome
    };

    categorias.push(novaCategoria);

    res.status(201).json(novaCategoria);
});

app.get("/categorias/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const categoria = categorias.find(c => c.id === id);

    if (!categoria) {
        return res.status(404).json({
            erro: "Categoria não encontrada"
        });
    }

    res.json(categoria);
});
let lancamentos = [
    {
        id: 1,
        usuarioId: 1,
        contaId: 1,
        categoriaId: 3,
        descricao: "Salário",
        valor: 2000,
        tipo: "receita",
        data: "2026-10-01"
    }
];

app.get("/lancamentos", (req, res) => {
    res.json(lancamentos);
});

app.post("/lancamentos", (req, res) => {

    const novoLancamento = {
        id: lancamentos.length + 1,
        usuarioId: req.body.usuarioId,
        contaId: req.body.contaId,
        categoriaId: req.body.categoriaId,
        descricao: req.body.descricao,
        valor: req.body.valor,
        tipo: req.body.tipo,
        data: req.body.data
    };

    lancamentos.push(novoLancamento);

    // Se for receita, aumenta o saldo
    if (novoLancamento.tipo === "receita") {
        contas[novoLancamento.contaId - 1].saldo += novoLancamento.valor;
    }

    // Se for despesa, diminui o saldo
    if (novoLancamento.tipo === "despesa") {
        contas[novoLancamento.contaId - 1].saldo -= novoLancamento.valor;
    }

    res.status(201).json(novoLancamento);
});
app.get("/extrato", (req, res) => {

    const usuarioId = parseInt(req.query.usuarioId);

    const resultado = lancamentos.filter(
        l => l.usuarioId === usuarioId
    );

    res.json(resultado);
});

app.get("/contas/:id/saldo", (req, res) => {

    const id = parseInt(req.params.id);

    const conta = contas.find(c => c.id === id);

    if (!conta) {
        return res.status(404).json({
            erro: "Conta não encontrada"
        });
    }

    res.json({
        saldo: conta.saldo
    });
});

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000");
});