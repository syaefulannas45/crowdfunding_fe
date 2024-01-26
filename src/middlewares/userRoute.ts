import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { MiddlewareFactory } from "./stackHandler";

export const userRoute: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const cookie = cookies();
    const token = cookie.get("token")?.value;

    const startWith = (url: string) => {
      return request.nextUrl.pathname.startsWith(url);
    };
    const included = (url: string) => {
      return request.nextUrl.pathname === url;
    };

    if (token !== undefined && (included("/login") || included("/register"))) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return next(request, _next);
  };
};
