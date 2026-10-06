const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Usuários
let usuarios = [
    {
        id: 1,
        nome: "João",
        email: "joao@gmail.com"
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@gmail.com"
    }
];

// Rota inicial
app.get("/", (req, res) => {
    res.json({
        mensagem: "API de Controle Financeiro no ar!"
    });
});

// Listar usuários
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// Buscar usuário por ID
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

// Criar usuário
app.post("/usuarios", (req, res) => {
    const { nome, email } = req.body;

    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

// Atualizar usuário
app.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    usuario.nome = req.body.nome || usuario.nome;
    usuario.email = req.body.email || usuario.email;

    res.json(usuario);
});

// Excluir usuário
app.delete("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = usuarios.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    usuarios.splice(index, 1);

    res.json({
        mensagem: "Usuário excluído com sucesso"
    });
});