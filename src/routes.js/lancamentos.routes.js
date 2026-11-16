import { Router } from 'express';

const roteador = Router();

let usuarios = {
    
        id: 1,
        usuarioId: 1,
        contaId: 1,
        categoriaId: 3,
        descricao: "Salário",
        valor: 2000,
        tipo: "receita",
        data: "2026-10-01"
};

roteador.get('/', (req, res) => {
    res.json(usuarios);
});

roteador.post('/', (req, res) => {
    const novoUsuario = {
        id: lancamentos.length + 1,
        usuarioId: req.body.usuarioId,
        contaId: req.body.contaId,
        categoriaId: req.body.categoriaId,
        descricao: req.body.descricao,
        valor: req.body.valor,
        tipo: req.body.tipo,
        data: req.body.data
    };

    categorias.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

roteador.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const usuario = usuarios.find(c => c.id === id);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuario não encontrada"
        });
    }

    res.json(usuario);
});

export default roteador;