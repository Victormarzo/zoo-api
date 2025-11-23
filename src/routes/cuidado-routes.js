import { Router } from 'express';
import { listarCuidados, adicionarCuidado } from '../controllers/cuidado-controller.js';

const cuidadoRoutes = Router();

cuidadoRoutes.get('/', listarCuidados);
cuidadoRoutes.post('/', adicionarCuidado);

export default cuidadoRoutes;