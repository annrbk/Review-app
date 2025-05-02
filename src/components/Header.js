"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isOnReviewsPage = pathname.startsWith("/reviews");

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex items-center">
          <a
            href="/"
            className="text-2xl font-extrabold tracking-tight text-blue-600"
          >
            RV
          </a>
          <span className="ml-2 text-lg font-semibold text-gray-900">
            reviews app
          </span>
        </div>
        {isOnReviewsPage ? (
          <button
            onClick={() => router.push("/")}
            className="text-sm font-semibold text-gray-900 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
          >
            Create a new review
          </button>
        ) : (
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/reviews"
              className="text-sm font-semibold text-gray-900 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
            >
              Go to all reviews
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
