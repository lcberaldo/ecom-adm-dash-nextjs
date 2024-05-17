
import {
  NextFetchEvent,
  NextRequest,
  NextResponse
} from "next/server";

import { MiddlewareFactory } from "./types";


export const withToken: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    const token = request.cookies.get("Authorization");

    if (pathname === '/' && token) {
      const url = new URL(`/dashboard`, request.url);
      return NextResponse.redirect(url);
    }
    return next(request, _next);
  };
};