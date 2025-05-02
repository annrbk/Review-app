import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, product, message, image } = await request.json();

    const db = await createConnection();

    await db.execute(
      "INSERT INTO comments (name, email, product, comment, image) VALUES (?, ?, ?, ?, ?)",
      [name, email, product, message, JSON.stringify(image ?? null)]
    );

    return NextResponse(JSON.stringify({ message: "Review saved" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error saving review", error);
    return NextResponse.json({ error: error.message });
  }
}
