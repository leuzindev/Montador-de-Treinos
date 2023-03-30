import { Router } from 'express';
import  WorkoutController  from '../../controllers/workout.controller';

const router = Router();

router
    .get('/users', WorkoutController.ListWorkouts)
    // .get('/user/:id', UserController.UserbyId)
    // .post('/users', UserController.CreateUser)
    // .put('/user/:id', UserController.UpdateUser)
    // .delete('/user/:id', UserController.DeleteUser)

export { router as WorkoutRouter };
