// BACKEND CODE REMOVED - Authentication disabled

import { NextResponse } from "next/server";

// Disabled authentication endpoint
export async function GET() {
  return NextResponse.json(
    { error: "Authentication disabled" },
    { status: 503 }
  );
}

export async function POST() {
  return NextResponse.json(
    { error: "Authentication disabled" },
    { status: 503 }
  );
}
