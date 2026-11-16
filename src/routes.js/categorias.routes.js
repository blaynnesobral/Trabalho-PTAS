import { Router } from 'express';

const roteador = Router();

let categorias = [
    { id: 1, nome: "Alimentação" },
    { id: 2, nome: "Transporte" },
    { id: 3, nome: "Salário" }
];

roteador.get('/', (req, res) => {
    res.json(categorias);
});

roteador.post('/', (req, res) => {
    const novaCategoria = {
        id: categorias.length + 1,
        nome: req.body.nome
    };

    categorias.push(novaCategoria);

    res.status(201).json(novaCategoria);
});

roteador.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const categoria = categorias.find(c => c.id === id);

    if (!categoria) {
        return res.status(404).json({
            erro: "Categoria não encontrada"
        });
    }

    res.json(categoria);
});

export default roteador;