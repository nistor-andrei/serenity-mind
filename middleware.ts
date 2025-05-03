import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedRoutes = ["/platform"];

export function middleware(request: NextRequest) {
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );
  const isLogin = request.nextUrl.pathname === "/login";

  const isLoggedIn = request.cookies
    .getAll()
    .some(
      (cookie) =>
        cookie.name.startsWith("sb-") && cookie.name.includes("-auth-token.")
    );

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLogin && isLoggedIn) {
    return NextResponse.redirect(new URL("/platform", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/platform/:path*", "/login"],
};
