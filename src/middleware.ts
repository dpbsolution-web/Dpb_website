import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdmin = token?.role === "admin";

    // Allow public GET requests to certain API endpoints
    if (req.nextUrl.pathname.startsWith("/api/admin")) {
      const publicReadEndpoints = ["/api/admin/team", "/api/admin/careers", "/api/admin/testimonials"];
      const isPublicRead = publicReadEndpoints.some(endpoint => 
        req.nextUrl.pathname.startsWith(endpoint)
      ) && req.method === "GET";
      
      if (isPublicRead) {
        return NextResponse.next();
      }
      
      // For write operations, require admin authentication
      if (!isAdmin) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        );
      }
    }

    if (req.nextUrl.pathname.startsWith("/admin") && 
        !req.nextUrl.pathname.startsWith("/admin/login") && 
        !isAdmin) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to admin login page
        if (req.nextUrl.pathname.startsWith("/admin/login")) {
          return true;
        }
        
        // Allow public GET requests to certain API endpoints
        if (req.nextUrl.pathname.startsWith("/api/admin")) {
          const publicReadEndpoints = ["/api/admin/team", "/api/admin/careers", "/api/admin/testimonials"];
          const isPublicRead = publicReadEndpoints.some(endpoint => 
            req.nextUrl.pathname.startsWith(endpoint)
          ) && req.method === "GET";
          
          if (isPublicRead) {
            return true;
          }
        }
        
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
