import { withAuth } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  if (req.method === "POST") {
    const res = NextResponse.json(
      { message: "Logout successfully" },
      { status: 200 }
    );
    res.cookies.delete("Authorization");
    return res;
  }
  return NextResponse.json({ message: "Wrong method" }, { status: 405 });
}

export const POST = withAuth(handler);
