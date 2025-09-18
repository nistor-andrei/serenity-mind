import Tokens from "csrf";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const tokens = new Tokens();

export async function verifyToken(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    const { payload } = await jwtVerify(token, secret);
    return { valid: true, payload };
  } catch {
    return { valid: false };
  }
}

export function withAuth(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const token = req.headers
      .get("cookie")
      ?.split("; ")
      .find((c) => c.startsWith("Authorization="))
      ?.split("=")[1];
    const csrfToken = req.headers
      .get("cookie")
      ?.split("; ")
      .find((c) => c.startsWith("csrfToken="))
      ?.split("=")[1];

    const { valid } = await verifyToken(token || "");

    if (!csrfToken || !valid) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    return handler(req);
  };
}
