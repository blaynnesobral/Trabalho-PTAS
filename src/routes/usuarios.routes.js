import { Router } from 'express';
import * as controller from '../controllers/usuarios.controller.js';

const router = Router();
router.get('/', controller.listar);
router.post('/', controller.criar);
router.post('/:id', controller.buscarPorId);

export default router;