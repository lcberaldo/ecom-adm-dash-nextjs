
import {
  NextFetchEvent,
  NextRequest,
  NextResponse
} from "next/server";

import { MiddlewareFactory } from "./types";


export const withoutToken: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (['/dashboard', '/members', '/products']?.some((path) => pathname.startsWith(path))) {
      const token = request.cookies.get("Authorization");
      if (!token) {
        const url = new URL(`/`, request.url);
        return NextResponse.redirect(url);
      }
    }
    return next(request, _next);
  };
};