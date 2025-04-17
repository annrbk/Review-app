import { getReviews } from "@/lib/reviewsService";

export default async function Reviews() {
  const data = await getReviews();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          All reviews
        </h1>
        <div className="space-y-4">
          {data.map((comment) => (
            <div
              key={comment.id}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-lg font-semibold text-gray-800 mb-1">
                {comment.name}
              </p>

              <p className="text-sm text-gray-500 mb-3">{comment.email}</p>
              <p className="text-lg font-semibold text-gray-800 mb-1">
                {comment.product}
              </p>
              <div>
                <p className="text-gray-700 break-words">{comment.comment}</p>
                {comment.image && (
                  <img
                    className="w-[30%]"
                    src={comment.image}
                    alt="Uploaded image"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
