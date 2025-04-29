import { getReviews, searchReviews } from "@/lib/reviewsService";
import PaginationContent from "@/components/Pagination/PaginatedContent";

export default async function Reviews({ searchParams }) {
  const query = searchParams?.query || "";

  let data = await getReviews();
  let searchData = [];

  if (query) {
    searchData = await searchReviews({ query });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          All reviews
        </h1>
        <PaginationContent
          data={data}
          searchData={searchData}
          searchParams={searchParams}
          query={query}
        />
      </div>
    </div>
  );
}
