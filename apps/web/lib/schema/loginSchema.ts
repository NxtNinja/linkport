import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .regex(/@gmail\.com$/, { message: "Only Gmail addresses are allowed" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
