import { Router } from 'express';
import { listarAnimais, adicionarAnimal} from '../controllers/animal-controller.js';

const animalRoutes = Router();

animalRoutes.get('/', listarAnimais);
animalRoutes.post('/', adicionarAnimal);
export default animalRoutes;