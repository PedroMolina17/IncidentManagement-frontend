import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("token"); // Asegúrate de obtener la cookie del token correctamente

  // Si no hay token, redirige al inicio
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Si hay token, continúa la navegación a la ruta de admin
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Solo protege las rutas que empiecen con /admin
};
