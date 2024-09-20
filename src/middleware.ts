import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/"],
};
