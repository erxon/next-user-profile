"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/20/solid";

export default function FileUpload({ image }: { image: string | undefined }) {
  const [imagePreview, setImagePreview] = useState<
    String | undefined | null | ArrayBuffer
  >(image);
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || !event.target.files[0]) {
      return;
    }

    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="mb-6">
      <label htmlFor="avatar" className="font-medium">
        Profile picture
      </label>
      <div className="flex items-center">
        <div>
          {imagePreview ? (
            <Image
              className="w-[56px] h-[56px] rounded-full mr-2 avatar"
              width={1000}
              height={1000}
              src={String(imagePreview)}
              alt="Avatar"
            />
          ) : (
            <div className="bg-gray-400 w-[56px] h-[56px] mr-2 rounded-full">
              <UserIcon className="text-white" />
            </div>
          )}
        </div>
        <div>
          <input
            onChange={handleFileChange}
            name="avatar"
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            className="block w-full text-sm mt-2 
            file:bg-gray-500 file:text-white 
            file:p-2 file:px-4  
            file:border-0 file:rounded-full
            file:hover:bg-gray-600 file:mr-2"
          />
          <p className="text-gray-700 text-sm mt-1">PNG/JPG/JPEG</p>
        </div>
      </div>
    </div>
  );
}
