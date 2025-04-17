"use client";

import { CldUploadWidget } from "next-cloudinary";

const cloudPresetName = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME;

export default function CloudinaryUploader({ setResource }) {
  return (
    <CldUploadWidget
      options={{
        multiple: true,
        sources: ["local", "url", "unsplash", "camera"],
        maxFiles: 5,
      }}
      uploadPreset={cloudPresetName}
      onSuccess={(result) => {
        setResource(result?.info.secure_url);
      }}
      onClose={() => {}}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className="py-2 px-4 bg-blue-100 text-blue-700 font-medium rounded-md hover:bg-blue-200 transition duration-300"
        >
          Upload image
        </button>
      )}
    </CldUploadWidget>
  );
}
