import express from 'express'
import bodyParser from 'body-parser';
import { UserRouter } from '../routes/User/userRoutes';
import { ExerciceRouter } from './Exercise/exerciseRoutes';
import { CategoryRouter } from './Category/categoryRoutes';
import { WorkoutRouter } from './Workouts/workoutsRoutes';
import { TechniqueRouter } from './Technique/techniqueRoutes';

export const app = express()

app.use(bodyParser.json());
app.use(UserRouter)
app.use(ExerciceRouter)
app.use(CategoryRouter)
app.use(WorkoutRouter)
app.use(TechniqueRouter)