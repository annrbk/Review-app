import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;

  try {
    const db = await createConnection();
    const [rows] = await db.query("SELECT * FROM comments WHERE id = ?", [id]);
    if (rows.length === 0) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error receiving review by Id", error);
    return NextResponse.json({ error: error.message });
  }
}
