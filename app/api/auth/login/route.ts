import { sql } from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "secret-key";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const emailDb = await sql`SELECT email FROM users WHERE email=${email}`;
  const passwordDb =
    await sql`SELECT password_hash FROM users WHERE email=${email}`;
  const isMatchPassword = await bcrypt.compare(
    password,
    passwordDb[0].password_hash
  );

  if (email !== emailDb && isMatchPassword) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 400 }
    );
  } else {
    const token = jwt.sign(
      {
        email: email,
      },
      JWT_SECRET,
      { expiresIn: "1day" }
    );
    const res = NextResponse.json(
      { message: "Login successfully" },
      { status: 200 }
    );
    res.cookies.set({
      name: "Authorization",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 86400,
    });
    return res;
  }
}
