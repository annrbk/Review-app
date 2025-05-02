import { createConnection } from "@/lib/db";

const ITEMS_PER_PAGE = 6;

export async function fetchReviewsPages(query, currentPage) {
  const connection = await createConnection();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const [reviews] = await connection.query(
      `SELECT id, name, email, product, comment, DATE_FORMAT(created_at, '%d-%m-%Y %H:%i:%s') AS created_at 
       FROM comments
       WHERE product LIKE ?
       ORDER BY id DESC
       LIMIT ? OFFSET ?`,
      [`%${query}%`, ITEMS_PER_PAGE, offset]
    );

    const [[{ count }]] = await connection.query(
      `SELECT COUNT(*) AS count FROM comments WHERE product LIKE ?`,
      [`%${query}%`]
    );

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    return {
      reviews,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return {
      reviews: [],
      totalPages: 0,
    };
  }
}
