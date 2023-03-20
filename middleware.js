import { NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export const config = {
  matcher: [ '/api/test/:path*', '/admin/:path*' ],
}

export async function middleware(req) {
  // validate the user is authenticated
  const verifiedTokenPayolad = await verifyAuth(req).catch((err) => {
    console.error(err.message)
  });
  if (!verifiedTokenPayolad) {
    // if this an API request, respond with JSON
    if (req.nextUrl.pathname.startsWith('/api/')) {
      return new NextResponse(
        JSON.stringify({ 'error': { message: 'authentication required' } }),
        { status: 401 });
    }
    // otherwise, redirect to the set token page
    else {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
}