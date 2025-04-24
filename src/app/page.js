"use client";

import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Modal from "../components/Modal";
import { useRouter } from "next/navigation";
import CloudinaryUploader from "@/components/CloudinaryUploader";

export default function ReviewForm() {
  const [isSubmitted, SetIsSubmitted] = useState(false);
  const [resource, setResource] = useState();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      product: "",
      message: "",
      image: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      product: Yup.string()
        .min(3, "Must be min 3 characters or more")
        .required("Required"),
      message: Yup.string()
        .min(3, "Must be min 3 characters or more")
        .required("Required"),
      image: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      const request = {
        name: values.name,
        email: values.email,
        product: values.product,
        message: values.message,
        image: resource,
      };
      try {
        const response = await fetch("/api/review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        });
        const data = await response.json();
        SetIsSubmitted(true);
        resetForm();
      } catch (error) {
        console.error("Error sending feedback", error);
      }
    },
  });

  return (
    <>
      {isSubmitted ? (
        <Modal onClose={() => SetIsSubmitted(false)} />
      ) : (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
              Feedback form
            </h1>
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:border-blue-500"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:border-blue-500"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product name
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:border-blue-500"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.product}
                />

                {formik.touched.product && formik.errors.product ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.product}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:border-blue-500"
                  placeholder="Enter your message"
                  rows={5}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.message}
                  </div>
                ) : null}
                <CloudinaryUploader setResource={setResource} />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
