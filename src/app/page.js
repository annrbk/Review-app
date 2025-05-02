"use client";

import { useState } from "react";
import Modal from "../components/Modal";
import Form from "@/components/Form";

export default function ReviewForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {isSubmitted ? (
        <Modal onClose={() => setIsSubmitted(false)} />
      ) : (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Your opinion matters - share your experience!
          </h2>
          <Form setIsSubmitted={setIsSubmitted} />
        </div>
      )}
    </>
  );
}
