import Link from "next/link";

export default function PaginatedReviewList({ reviews }) {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {reviews.map((comment) => (
          <Link
            href={`/reviews/${comment.id}`}
            key={comment.id}
            className="block p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg font-regular text-gray-800 mb-1">
              {comment.name}
            </p>
            <p className="text-gray-600">
              {new Date(comment.created_at).toLocaleDateString("en-En")}
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-5 mt-2 ">
              {comment.product}
            </p>
            <div>
              <p className="text-gray-700 line-clamp-3">{comment.comment}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
