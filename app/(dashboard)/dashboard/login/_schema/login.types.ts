import z from "zod";

export const loginSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be less than 50 characters"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be less than 50 characters"),
  country: z.string().min(1, "Country is required"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
