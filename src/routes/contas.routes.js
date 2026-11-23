import { Router } from 'express';
import * as controller from '../controllers/contas.controller.js';

const router = Router();
router.get('/', controller.listar);
router.post('/', controller.criar);
router.post('/:id', controller.buscarPorId);
router.post('/', controller.atualizar);
router.post('/', controller.remover);

export default router;