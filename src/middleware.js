import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export async function middleware(request) {
  const token = request.cookies.get("token");

  if (token && request.nextUrl.pathname === "/") {
    try {
      const decodedToken = jwtDecode(token.value);
      console.log(decodedToken);

      if (decodedToken.role === 1) {
        return NextResponse.redirect(new URL("/user", request.url));
      } else if (decodedToken.role === 2) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (!token && ["/admin", "/user"].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/"],
};
