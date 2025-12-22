import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET - Fetch all stats
export async function GET() {
  try {
    const stats = await prisma.stat.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}

// POST - Create new stat
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
    const { value, label, icon, order } = body;

    const stat = await prisma.stat.create({
      data: {
        value,
        label,
        icon: icon || "TrendingUp",
        order: order || 0,
      },
    });

    return NextResponse.json(stat, { status: 201 });
  } catch (error) {
    console.error("Error creating stat:", error);
    return NextResponse.json(
      { error: "Failed to create stat" },
      { status: 500 }
    );
  }
}

// PUT - Update stat
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
    const { id, value, label, icon, order } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    const stat = await prisma.stat.update({
      where: { id },
      data: {
        value,
        label,
        icon,
        order,
      },
    });

    return NextResponse.json(stat);
  } catch (error) {
    console.error("Error updating stat:", error);
    return NextResponse.json(
      { error: "Failed to update stat" },
      { status: 500 }
    );
  }
}

// DELETE - Delete stat
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

    await prisma.stat.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting stat:", error);
    return NextResponse.json(
      { error: "Failed to delete stat" },
      { status: 500 }
    );
  }
}
