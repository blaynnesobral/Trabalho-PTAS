import * as servico from '../services/categorias.service.js';
import { ErroDeValidacao } from '../services/categorias.service.js';

export async function listar(req, res) {
    try {
        res.json(await servico.listar());
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro interno ao listar categorias.' });
    }
}

export async function criar(req, res) {
    try {
        const categoria = await servico.criar(req.body ?? {});
        res.status(201).json(categoria);
    } catch (erro) {
        if (erro instanceof ErroDeValidacao) {
            return res.status(400).json({ erro: erro.message });
        }
        console.error(erro);
        res.status(500).json({ erro: 'Erro interno ao criar categoria.' });
    }
}

export async function buscarPorId(req, res) {
    try {
        res.json(await servico.buscarPorId(req.params.id));
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro interno ao buscar categoria.' });
    }
}