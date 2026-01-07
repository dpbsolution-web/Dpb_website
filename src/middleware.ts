// BACKEND CODE REMOVED - No authentication middleware
// This file is kept to prevent build errors but does nothing

import { NextResponse } from "next/server";

// Simple passthrough middleware - does nothing
export function middleware() {
  return NextResponse.next();
}

// Don't apply middleware to any routes
export const config = {
  matcher: [],
};
