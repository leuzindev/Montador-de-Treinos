import { z } from 'zod'


export const createTechniqueSchema = z.object({
    name: z.string(),
    description: z.string()


  })