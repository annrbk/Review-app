import { getReviewById } from "@/lib/reviewsService";

export default async function reviewPage({ params }) {
  const comment = await getReviewById(params.id);

  if (!comment) return <p>Error loading comment. Please try again later!</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Details</h1>
      </div>
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {comment.product}
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-gray-600">{comment.name}</p>
            </div>

            <div>
              <p className="text-gray-600">{comment.email}</p>
            </div>

            <div>
              <p className="text-gray-800">{comment.comment}</p>
            </div>
            {comment.image && (
              <div className="mt-4">
                <img
                  src={comment.image}
                  alt="Uploaded image"
                  className="rounded-md w-full max-w-md mx-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
