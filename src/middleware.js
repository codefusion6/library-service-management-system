"use client";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;
  // if () {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  console.log({
    pathname,
    sort: searchParams.get("sort"),
    text: "from middleware",
  });

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard",
};
