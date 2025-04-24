import { getReviewById } from "@/lib/reviewsService";
import BackButton from "@/components/BackButton";
import { normalizeImage } from "@/app/utils/imageUtils";

export default async function reviewPage({ params }) {
  const comment = await getReviewById(params.id);

  if (!comment) return <p>Error loading comment. Please try again later!</p>;

  const normalizedImages = normalizeImage(comment.image);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Details</h1>
      </div>
      <div className="flex justify-center mb-2">
        <div className="w-full max-w-4xl">
          <BackButton />
        </div>
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
            {normalizedImages.length > 0 && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {normalizedImages.map((url) => (
                  <div key={url} className="w-full">
                    <img
                      src={url}
                      alt="Uploaded image"
                      className="rounded-md w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
