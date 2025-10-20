import React, { useRef, useState, useEffect } from "react";

export default function ProfileImageInput({
  setImageProfile,
  size = 128,
  preview, setPreview,
  accept = "image/*",
}) {
  
  const inputRef = useRef(null);

  

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      
      
    };
    reader.readAsDataURL(file);
  };

  const onPickFile = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-5">
      <div
        className="relative group cursor-pointer"
        style={{ width: size, height: size }}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={onPickFile}
        />
        {preview ? (
          <img
            src={preview}
            alt="photo de profil"
            className="h-full w-full rounded-full object-cover border-2 border-gray-300 shadow-md"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-100 border-2 border-dashed border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16V8a2 2 0 012-2h6a2 2 0 012 2v8M7 16l5-5 5 5"
              />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40 rounded-full">
          <span className="text-white text-sm">Changer</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="text-sm text-blue-500 hover:underline"
      >
        Change profile image 
      </button>
    </div>
  );
}
