import * as servico from '../services/lancamentos.service.js';
import { ErroDeValidacao } from '../services/lancamentos.service.js';

export async function listar(req, res) {
    try {
        res.json(await servico.listar());
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao listar lancamento.' });
    }
}

export async function criar(req, res) {
    try {
        const lancamentos = await servico.criar(req.body ?? {});
        res.status(201).json(lancamentos);
    } catch (erro) {
        if (erro instanceof ErroDeValidacao) {
            return res.status(400).json({ erro: erro.message });
        }

        console.error(erro);
        res.status(500).json({ erro: 'Erro ao criar lancamento.' });
    }
}

export async function buscarPorId(req, res) {
    try {
        res.json(await servico.buscarPorId(req.params.id));
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao buscar lancamento.' });
    }
}
//atualizar e remover
export async function atualizar(req, res) {
    try {
        res.json(await servico.atualizar(req.params.id, req.body ?? {}));
    } catch (erro) {
        if (erro instanceof ErroDeValidacao) {
            return res.status(400).json({ erro: erro.message });
        }

        console.error(erro);
        res.status(500).json({ erro: 'Erro ao atualizar lancamento.' });
    }
}

export async function remover(req, res) {
    try {
        await servico.remover(req.params.id);
        res.status(204).send();
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao remover lancamento.' });
    }
}
