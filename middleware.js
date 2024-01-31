import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, serachParams } = request.nextUrl;
  console.log({
    pathname,
    sort: serachParams.get("sort"),
    text: "from middleware",
  });

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard",
};
