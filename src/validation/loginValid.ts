import { z } from 'zod'

export const FormScheme = z.object({
  username: z
    .string()
    .min(4, {
      message: 'More than 4 characters are required.',
    })
    .max(16, {
      message: 'Cannot enter more than 16 characters.',
    }),
  email: z.string().regex(/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i, {
    message: 'You must enter it in your email address format.',
  }),
  password: z
    .string()
    .min(8, {
      message: 'More than 8 characters are required.',
    })
    .max(32, {
      message: 'Cannot enter more than 32 characters.',
    }),
})
