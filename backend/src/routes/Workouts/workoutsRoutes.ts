import { Router } from 'express';
import  WorkoutController  from '../../controllers/workout.controller';
import WorkoutplanController from '../../controllers/workoutplan.controller';

const router = Router();

router
    .get('/workouts', WorkoutController.AllWorkouts)
    // .get('/user/:id', UserController.UserbyId)
    .post('/workouts', WorkoutController.CreateWorkout)
    // .put('/user/:id', UserController.UpdateUser)
    // .delete('/user/:id', UserController.DeleteUser)

    .get('/workout-plans', WorkoutplanController.AllWorkoutsPlans)
    .post('/workout-plans', WorkoutplanController.CreateWorkoutPlans)
export { router as WorkoutRouter };
