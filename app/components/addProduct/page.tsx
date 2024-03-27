"use client";

import React, { useState } from "react";
import Header from "../Header";
import Image from "next/image";

const AddProducts = () => {
  const [previewImage, setPreviewImage] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };

      // Read the file as a data URL
      return reader.readAsDataURL(file);
    } else {
      const string = "";
      setPreviewImage(string);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-slate-500">
        <div className="grid gap-10 mx-auto  mb-40 w-[200px]">
          <div className="mt-40">add your products</div>
          <input type="text" />
          <input type="number" />
          <div>
            <input
              className="w-full"
              type="file"
              placeholder="Image"
              onChange={handleImageChange}
              accept="image/*"
            />
            {previewImage && (
              <Image
                src={previewImage}
                alt="Preview Image"
                width={400}
                height={400}
              />
            )}
          </div>

          <select>
            <option>$</option>
            <option>₦</option>
          </select>
          <button className="px-5 py-2 active:shadow-slate-400 active:shadow-md border-slate-100 rounded-lg border hover:opacity-75 active:opacity-90 transition duration-150 text-white">
            add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
