import { guestRoute, stackMiddlewares, userRoute } from "./middlewares";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const middlewares = [guestRoute, userRoute];
export default stackMiddlewares(middlewares);

// export function middleware(request: NextRequest) {
//   const cookie = cookies();
//   const token = cookie.get("token")?.value;

//   if (token !== undefined && request.nextUrl.pathname.startsWith("/login")) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }

//   if (token === undefined) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/register/upload", "/register/success","/login"],
// };
