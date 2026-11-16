import * as servico from '../services/usuarios.service.js';
import { ErroDeValidacao } from '../services/usuarios.service.js';

export async function listar(req, res) {
    try {
        res.json(await servico.listar());
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao listar usuários.' });
    }
}

export async function criar(req, res) {
    try {
        const usuario = await servico.criar(req.body ?? {});
        res.status(201).json(usuario);
    } catch (erro) {
        if (erro instanceof ErroDeValidacao) {
            return res.status(400).json({ erro: erro.message });
        }

        console.error(erro);
        res.status(500).json({ erro: 'Erro ao criar usuário.' });
    }
}

export async function buscarPorId(req, res) {
    try {
        res.json(await servico.buscarPorId(req.params.id));
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao buscar usuário.' });
    }
}