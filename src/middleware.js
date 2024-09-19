import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export async function middleware(request) {
  const token = request.cookies.get("token");
  console.log(request.nextUrl.pathname);

  if (!token) {
    if (!token) {
      if (
        request.nextUrl.pathname.startsWith("/admin") ||
        request.nextUrl.pathname.startsWith("/user")
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  } else {
    try {
      const decodedToken = jwtDecode(token.value);

      if (
        decodedToken.role === 1 &&
        request.nextUrl.pathname.startsWith("/user")
      ) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }

      if (
        decodedToken.role === 2 &&
        request.nextUrl.pathname.startsWith("/admin")
      ) {
        return NextResponse.redirect(new URL("/user", request.url));
      }

      if (request.nextUrl.pathname === "/") {
        if (decodedToken.role === 1) {
          return NextResponse.redirect(new URL("/user", request.url));
        } else if (decodedToken.role === 2) {
          return NextResponse.redirect(new URL("/admin", request.url));
        }
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/"],
};
