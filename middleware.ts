import { NextResponse } from 'next/server';
import { clerkMiddleware, getAuth } from '@clerk/nextjs/server';

const isProtectedRoute = (pathname: string) => {
  const protectedRoutes = ['/quiz', '/studio'];
  return protectedRoutes.some(route => pathname.startsWith(route));
};

export default clerkMiddleware((req: any) => {
  const { nextUrl } = req;

  if (!nextUrl) {
    console.error("nextUrl is undefined on the request object");
    return NextResponse.next();
  }

  const { pathname } = nextUrl;
  const { userId } = getAuth(req);

  console.log(`Request URL: ${nextUrl.href}`);
  console.log(`User ID: ${userId}`);

  if (isProtectedRoute(pathname)) {
    // If the route is /studio or its subroutes, check for the specific user ID
    if (pathname.startsWith('/studio')) {
      console.log(`Protected route /studio accessed by user ${userId}`);
      // Check if the user ID matches one of the admin's user IDs
      if (userId !== 'user_2jKDAc53rmU0WunQaia2PI6U6GE' && userId !== 'user_2k2mzgSxVuUlrJsQWL7XdLrMm6i') {
        console.log('Access denied for non-admin user');
        return new Response(
          `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Access Denied</title>
            <style>
              body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f3f4f6;
                margin: 0;
                font-family: Arial, sans-serif;
                color: #333;
              }
              .container {
                text-align: center;
                background: white;
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              h1 {
                font-size: 2rem;
                margin-bottom: 1rem;
                color: #e11d48;
              }
              p {
                font-size: 1rem;
                margin-bottom: 1rem;
              }
              a {
                color: #3b82f6;
                text-decoration: none;
              }
              a:hover {
                text-decoration: underline;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Access Denied</h1>
              <p>You do not have permission to access this page.</p>
              <p>Please <a href="/">return to the homepage</a>.</p>
            </div>
          </body>
          </html>
          `,
          { status: 403, headers: { 'Content-Type': 'text/html' } }
        );
      }
    }
    // Protect all other routes
    console.log('Applying auth protection');
    return NextResponse.next();
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};