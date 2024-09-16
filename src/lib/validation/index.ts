import { z } from 'zod';

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'The name is not long enough' }),
  username: z.string().min(2, { message: 'The name is not long enough' }),
  email: z.string().email(),
  password: z.string().min(8, {message: 'The password must be at least 8 characters.'})
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'The password must be at least 8 characters.'})
});
