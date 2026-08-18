import { NextRequest, NextResponse } from "next/server";

const locales = ["ar", "en", "fr"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/ar/campaign/morocco", request.url));
  }
  const first = pathname.split("/")[1];
  if (pathname.includes("/campaign/morocco") && !locales.includes(first)) {
    return NextResponse.redirect(new URL(`/ar${pathname}`, request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/", "/campaign/:path*", "/(ar|en|fr)/campaign/:path*"] };
