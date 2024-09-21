import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "./lib/session";

export default async function middleware(request: NextRequest) {
  const sessionToken = cookies().get("session")?.value;
  const { pathname } = new URL(request.url);

  const isHomePage = pathname === "/home";

  if (pathname === "/")
    return NextResponse.redirect(new URL("/home", request.url));

  if (sessionToken) {
    const data = await decodeToken(sessionToken);

    if (data.payload.id && !isHomePage) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }
  if (!sessionToken && isHomePage) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
