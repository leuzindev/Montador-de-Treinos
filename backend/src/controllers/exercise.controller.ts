import prisma from "../database/prismaClient";
import { Request, Response } from "express";

class ExerciseController {
  static async AllExercises(request: Request, response: Response) {
    try {
      const exercises = await prisma.exercise.findMany();
      return response.status(200).json(exercises);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async ExerciseById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const exercise = await prisma.exercise.findUnique({
        where: {
          id: id,
        },
      });
      return response.status(200).json(exercise);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async CreateExercise(request: Request, response: Response) {
    try {
      const { name, description, video, image } = request.body;
      const categoryId = parseInt(request.params.categoryId);

      // Verifica se a categoria existe
      const category = await prisma.category.findUnique({
        where: { id: categoryId },
      });
      if (!category) {
        return response.status(404).json({ error: "Categoria não encontrada" });
      }
      // Cria o exercício
      const exercise = await prisma.exercise.create({
        data: {
          name,
          description,
          video,
          image,
          category: {
            connect: { id: categoryId },
          },
        },
      });
      return response.status(201).json(exercise)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ error: 'Error on Create Exercice'})
    }
  }
 
  static async UpdateExercise(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, description, category, video, image } = request.body;
      const updatedExercise = await prisma.exercise.update({
        where: {
          id: id,
        },
        data: { name, description, category, video, image },
      });
      return response.status(204).json(updatedExercise);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async DeleteExercise(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await prisma.exercise.delete({
        where: {
          id: id,
        },
      });
      return response.status(204).json({ message: "Exercice has been deleted" });
    } catch (error) {
      return response.status(500).send();
    }
  }
}

export default ExerciseController;
