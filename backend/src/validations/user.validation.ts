import { z } from 'zod'


export const createUserSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    isTeacher: z.boolean().optional()
})