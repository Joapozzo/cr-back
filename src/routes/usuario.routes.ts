import { Router } from 'express';
import { crearUsuarioHandler } from '../controllers/usuario.controller';

const router = Router();

router.post('/', crearUsuarioHandler);

export default router;
