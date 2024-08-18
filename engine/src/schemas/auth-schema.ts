import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstname: z
    .string()
    .min(1, 'Firstname is required')
    .max(100, 'Firstname is too long'),
  lastname: z
    .string()
    .min(1, 'Lastname is required')
    .max(100, 'Lastname is too long'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(100, 'Password is too long'),
});

export const loginUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string(),
});
