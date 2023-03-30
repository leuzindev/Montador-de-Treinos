import { Router } from 'express';
import ExerciseController from '../../controllers/exercise.controller';

const router = Router();

router
    .get('/exercises', ExerciseController.AllExercises)
    .get('/exercise/:id', ExerciseController.ExerciseById)
    .post('/exercise/:categoryId', ExerciseController.CreateExercise)
    .put('/exercise/:id', ExerciseController.UpdateExercise)
    .delete('/exercise/:id', ExerciseController.DeleteExercise)

export { router as ExerciceRouter };
