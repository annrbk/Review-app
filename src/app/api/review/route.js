import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const db = await createConnection();

    await db.execute(
      "INSERT INTO comments (name, email, comment) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return NextResponse(JSON.stringify({ message: "Review saved" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error saving review", error);
    return NextResponse.json({ error: error.message });
  }
}

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM comments";
    const [reviews] = await db.query(sql);
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error receiving reviews", error);
    return NextResponse.json({ error: error.message });
  }
}
