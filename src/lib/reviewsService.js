export async function getReviews() {
  try {
    const res = await fetch("http://localhost:3000/api/review");
    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}
