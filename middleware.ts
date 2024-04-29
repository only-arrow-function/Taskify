import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const token = request.cookies;
  if (!token.has('token')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (login page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login|signup).*)',
  ],
};
