import prisma from "../database/prismaClient";
import { Request, Response } from "express";
import { Exercise } from "../entities/Exercice";

class WorkoutController {
  static async AllWorkouts(request: Request, response: Response) {
    try {
      const workouts = await prisma.workout.findMany();
      return response.status(200).json(workouts);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  static async CreateWorkout(request: Request, response: Response) {
    try {
        
    } catch (error) {
     
    }
  }
}
export default WorkoutController;
