import { isTokenExpired } from "@/utils/utils";
import { jwtVerify } from "jose";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("Authorization")?.value;
  const pathname = request.nextUrl.pathname;

  if (!token) {
    if (pathname.startsWith("/platform")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    if (payload.exp && isTokenExpired(payload.exp)) {
      if (pathname.startsWith("/platform")) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      return NextResponse.next();
    }
  } catch {
    if (pathname.startsWith("/platform")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/platform/:path*", "/login"],
};
