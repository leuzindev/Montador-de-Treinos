import { Router } from 'express';
import  WorkoutController  from '../../controllers/workout.controller';

const router = Router();

router
    .get('/workouts', WorkoutController.AllWorkouts)
    // .get('/user/:id', UserController.UserbyId)
    .post('/workouts', WorkoutController.CreateWorkout)
    // .put('/user/:id', UserController.UpdateUser)
    // .delete('/user/:id', UserController.DeleteUser)

export { router as WorkoutRouter };
