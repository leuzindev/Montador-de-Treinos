import { Router } from 'express';
import TechniqueController from '../../controllers/technique.controller';

const router = Router();

router
    .get('/techniques', TechniqueController.AllTechniques)
    .get('/technique/:id', TechniqueController.TechniqueById)
    .post('/techniques', TechniqueController.CreateTechnique)
    .put('/technique/:id', TechniqueController.UpdateTechnique)
    .delete('/technique/:id', TechniqueController.DeleteTechnique)

export { router as TechniqueRouter };
