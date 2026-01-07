// Using static team data from constants

import { NextResponse } from "next/server";
import { TEAM_MEMBERS } from "@/constants/team";

// GET endpoint returns static team data
export async function GET() {
  return NextResponse.json(TEAM_MEMBERS);
}

export async function POST() {
  return NextResponse.json(
    { error: "API disabled - using static data" },
    { status: 503 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: "API disabled - using static data" },
    { status: 503 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: "API disabled - using static data" },
    { status: 503 }
  );
}
