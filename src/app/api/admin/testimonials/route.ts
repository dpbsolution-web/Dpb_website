// BACKEND CODE REMOVED - API disabled, using static data from constants

import { NextResponse } from "next/server";

// Disabled API endpoint - returns error
export async function GET() {
  return NextResponse.json(
    { error: "API disabled - using static data" },
    { status: 503 }
  );
}

export async function POST() {
  return NextResponse.json(
    { error: "API disabled" },
    { status: 503 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: "API disabled" },
    { status: 503 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: "API disabled" },
    { status: 503 }
  );
}
