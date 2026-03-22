import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const country = request.geo?.country || "US";

  const response = NextResponse.next();

  response.headers.set("x-country", country);

  return response;
}