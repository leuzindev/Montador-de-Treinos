
import prisma from "../database/prismaClient";
import { Request, Response } from 'express';
import { createCategorySchema } from "../validations/category.validation";
import { Prisma } from ".prisma/client";

class CategoryController{ 

    static async AllCategories(request : Request, response: Response){
        try {
            const  categories = await prisma.category.findMany()
            return response.status(200).json(categories)
            
        } catch (error) {
            return response.status(500).send()
        }
    }
    static async CategoryById(request : Request, response: Response){
        try {
            const { id } = request.params
            const category = await prisma.category.findUnique({
                where:{
                    id: parseInt(id)
                },
                include: {
                    exercises: true
                }
            })
            return response.status(200).json(category)
            
        } catch (error) {
            return response.status(500).send()
        }
    }
    static async CreateCategory(request : Request, response: Response){
        try {

            const { name, exercises }  = createCategorySchema.parse(request.body)

            const newCategory = await prisma.category.create({
                data: {
                  name,
                  exercises: {
                    create: exercises.map((exercise: Prisma.ExerciseCreateInput) => ({
                      name: exercise.name,
                      description: exercise.description,
                      video: exercise.video,
                      image: exercise.image,
                    })),
                  },
                },
                include: { exercises: true },
              })
            return response.status(201).json(newCategory)

        } catch (error) {
            console.log(error)
            return response.status(500).send()
        }
    }
    static async UpdateCategory(request: Request, response: Response){
        try {
            const { id } = request.params;
            const { name, exercises } = request.body
            const updatedCategory = await prisma.category.update({
                where: {
                    id: parseInt(id)
                },
                data: { name, exercises }
            })
            return response.status(204).json(updatedCategory)

        } catch (error) {
            return response.status(500).send()
        }
    }
    static async DeleteCategory(request: Request, response: Response){
        try {
            const { id } = request.params;
            await prisma.category.delete({
                where: {
                    id: parseInt(id)
                }
            })
            return response.status(204).json({ message: "Category has been deleted"})

        } catch (error) {
            return response.status(500).send()
        }
    }
}

export default CategoryController