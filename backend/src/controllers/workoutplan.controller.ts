import prisma from "../database/prismaClient";
import { Request, Response } from "express";
import { Exercise } from "../entities/Exercice";

class WorkoutplanController {
  static async AllWorkoutsPlans(request: Request, response: Response) {
    try {
    
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  static async CreateWorkoutPlans(request: Request, response: Response) {
    try {
      
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}
export default WorkoutplanController;
