"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}
