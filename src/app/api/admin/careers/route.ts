import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET - Fetch all job openings
export async function GET() {
  try {
    const openings = await prisma.jobOpening.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(openings);
  } catch (error) {
    console.error("Error fetching job openings:", error);
    return NextResponse.json(
      { error: "Failed to fetch job openings" },
      { status: 500 }
    );
  }
}

// POST - Create new job opening
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user?.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, department, location, type, description, requirements, active, order } = body;

    const opening = await prisma.jobOpening.create({
      data: {
        title,
        department,
        location,
        type: type || "Full-time",
        description,
        requirements,
        active: active !== undefined ? active : true,
        order: order || 0,
      },
    });

    return NextResponse.json(opening, { status: 201 });
  } catch (error) {
    console.error("Error creating job opening:", error);
    return NextResponse.json(
      { error: "Failed to create job opening" },
      { status: 500 }
    );
  }
}

// PUT - Update job opening
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user?.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, title, department, location, type, description, requirements, active, order } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    const opening = await prisma.jobOpening.update({
      where: { id },
      data: {
        title,
        department,
        location,
        type,
        description,
        requirements,
        active,
        order,
      },
    });

    return NextResponse.json(opening);
  } catch (error) {
    console.error("Error updating job opening:", error);
    return NextResponse.json(
      { error: "Failed to update job opening" },
      { status: 500 }
    );
  }
}

// DELETE - Delete job opening
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user?.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    await prisma.jobOpening.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting job opening:", error);
    return NextResponse.json(
      { error: "Failed to delete job opening" },
      { status: 500 }
    );
  }
}
