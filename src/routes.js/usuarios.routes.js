import { Router } from 'express';

const roteador = Router();

let usuarios = [
    { id: 1, nome: "João", email: "joao@gmail.com" },
    { id: 2, nome: "Maria", email: "maria@gmail.com" }
];

roteador.get('/', (req, res) => {
    res.json(usuarios);
});

roteador.post('/', (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

roteador.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.json(usuario);
});

export default roteador;