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

export async function GET(req) {
  try {
    const db = await createConnection();
    const query = req.nextUrl.searchParams.get("query") || "";
    let reviews;
    if (query) {
      const sql = "SELECT * FROM comments WHERE product LIKE ?";
      [reviews] = await db.query(sql, [`%${query}%`]);
    } else {
      const sql = "SELECT * FROM comments";
      [reviews] = await db.query(sql);
    }
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error receiving reviews", error);
    return NextResponse.json({ error: error.message });
  }
}
