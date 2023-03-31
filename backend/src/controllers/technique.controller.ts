import prisma from "../database/prismaClient";
import { Request, Response } from "express";
import { createTechniqueSchema } from "../validations/technique.validation";

class TechniqueController {
  static async AllTechniques(request: Request, response: Response) {
    try {
      const techniques = await prisma.technique.findMany();
      return response.status(200).json(techniques);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async TechniqueById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const technique = await prisma.technique.findUnique({
        where: {
          id: id,
        },
      });
      return response.status(200).json(technique);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async CreateTechnique(request: Request, response: Response) {
    try {
      const { name, description } = createTechniqueSchema.parse(request.body);
  
      const newUser = await prisma.technique.create({
        data: {
          name,
          description
        },
      });
      return response.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      return response.status(500).send();
    }
  }
  static async UpdateTechnique(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, description } = request.body;
      const updatedTechnique = await prisma.technique.update({
        where: {
          id: id,
        },
        data: { name, description },
      });
      return response.status(204).json(updatedTechnique);
    } catch (error) {
      return response.status(500).send();
    }
  }
  static async DeleteTechnique(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await prisma.technique.delete({
        where: {
          id: id,
        },
      });
      return response.status(204).json({ message: "User has been deleted" });
    } catch (error) {
      return response.status(500).send();
    }
  }
}

export default TechniqueController;
