import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, image } = await request.json();
    
    // Get current session from headers
    const session = await auth.api.getSession({
      headers: await request.headers,
    });

    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Update user using Better Auth's updateUser
    const updatedUser = await auth.api.updateUser({
      headers: await request.headers,
      body: {
        userId: session.user.id,
        name: name,
        image: image,
      },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Update failed" },
      { status: 500 }
    );
  }
}