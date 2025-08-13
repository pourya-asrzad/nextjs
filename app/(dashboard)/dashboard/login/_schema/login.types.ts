import z from "zod";

export const loginSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "Title must be less than 50 characters"),
  description: z.string().min(1, "description is required"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
