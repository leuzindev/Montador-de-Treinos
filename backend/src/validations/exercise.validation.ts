import { z } from 'zod'


export const createExerciseSchema = z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    video: z.string(),
    image: z.string(),
})