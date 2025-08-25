"use server";

import { sql } from "@/utils/utils";
import bcrypt from "bcryptjs";
import { z } from "zod";

export type RegisterState = {
  ok?: boolean;
  message: string;
  errors: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
};

const schema = z
  .object({
    name: z.string().min(3, "Name must have at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function registerUserAction(
  _prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  if (!process.env.DATABASE_URL) {
    return { ok: false, message: "", errors: { email: ["Database not configured"] } };
  }

  const name = (formData.get("name") ?? "") as string;
  const email = (formData.get("email") ?? "") as string;
  const password = (formData.get("password") ?? "") as string;
  const confirmPassword = (formData.get("confirmPassword") ?? "") as string;

  const parsed = schema.safeParse({ name, email, password, confirmPassword });
  if (!parsed.success) {
    return { ok: false, message: "", errors: parsed.error.flatten().fieldErrors };
  }

  try {
    const dbEmail =
      await sql/*sql*/`SELECT email FROM users WHERE email
