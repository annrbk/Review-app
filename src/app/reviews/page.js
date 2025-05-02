import PaginationContent from "@/components/Pagination/PaginatedContent";
import { fetchReviewsPages } from "@/lib/data";

export default async function Reviews({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { reviews: data, totalPages } = await fetchReviewsPages(
    query,
    currentPage
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          All reviews
        </h1>
        <PaginationContent
          data={data}
          searchParams={searchParams}
          query={query}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
