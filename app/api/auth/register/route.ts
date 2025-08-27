import { sql } from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  if (process.env.DATABASE_URL) {
    const dbEmail = await sql`SELECT email FROM users WHERE email=${email}`;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (dbEmail.length > 0) {
      return NextResponse.json(
        {
          message: "Invalid credentials",
        },
        { status: 400 }
      );
    } else {
      await sql`INSERT INTO users (name,email,password_hash)
        VALUES(${name},${email},${hashedPassword})
        `;
      return NextResponse.json(
        {
          message: "User created successfully",
        },
        {
          status: 201,
        }
      );
    }
  }
}
