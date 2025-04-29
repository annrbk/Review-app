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

export async function getReviewById(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/review/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch review by Id");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching review by Id:", error);
  }
}

export async function searchReviews({ query }) {
  const allReviews = await getReviews();
  const lowerQuery = query.toLowerCase();
  return allReviews.filter((review) =>
    (review.product || "").toLowerCase().includes(lowerQuery)
  );
}
