import { withAuth } from "@/utils/auth";
import { sql } from "@/utils/db";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  const token = req.cookies.get("Authorization")?.value || "";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    const { payload } = await jwtVerify(token, secret);

    const userInfo =
      await sql`SELECT name, email FROM users WHERE id=${payload.userId}`;
    const user = userInfo[0];

    return NextResponse.json({ ...user }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
}

export const GET = withAuth(handler);
