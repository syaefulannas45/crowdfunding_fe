import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";

export function middleware(request: NextRequest) {
  const token = Cookies.get("token");

  if (token === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/register/upload"],
};
