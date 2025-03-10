import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .regex(/@gmail\.com$/, { message: "Only Gmail addresses are allowed" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
