import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const token = request.cookies;
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token.has('token')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }
  if (request.nextUrl.pathname.startsWith('/my-dashboard')) {
    if (!token.has('token')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }
  if (request.nextUrl.pathname.startsWith('/mypage')) {
    if (!token.has('token')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }
  if (request.nextUrl.pathname.startsWith('/login')) {
    if (!token.has('token')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/my-dashboard', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/signup')) {
    if (!token.has('token')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/my-dashboard', request.url));
  }
  if (request.nextUrl.pathname === '/') {
    //렌징페이지
    if (!token.has('token')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/my-dashboard', request.url));
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
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
