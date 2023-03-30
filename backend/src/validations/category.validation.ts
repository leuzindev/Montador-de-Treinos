import { z } from 'zod'


export const createCategorySchema = z.object({
    name: z.string(),
    exercises: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        video: z.string(),
        image: z.string(),
      })
    ),
  })