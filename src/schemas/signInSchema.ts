import { z } from "zod";

export const signInSchema = z.object({
  identifier: z.string() /*identifier A  general term for email/username*/,
  password: z.string(),
});
