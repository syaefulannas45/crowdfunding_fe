"use client";
import { ICAvatarAdd, ILAvatar } from "@/assets";
import axios from "axios";
import Image from "next/image";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";

const UploadProfilePage = async () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const data = await getData();
  console.log(data);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  const handleSignUp = async () => {};

  return (
    <section className="antiliased">
      <div className="auth-page">
        <div className="container mx-auto h-screen flex justify-center items-center">
          <div className="w-full lg:w-1/3 px-10 lg:px-0">
            <div className="flex justify-center items-center mx-auto mb-4 w-40">
              <div className="relative" onClick={handleImageClick}>
                <Image
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : ILAvatar
                  }
                  alt=""
                  className="rounded-full border-white border-4 w-[150px] h-[150px] object-cover"
                  priority
                  width={500}
                  height={500}
                />
                <div className="absolute right-0 bottom-0 pb-2">
                  <ICAvatarAdd />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  ref={inputRef}
                />
              </div>
            </div>
            <h2 className="font-normal mb-3 text-3xl text-white text-center">
              {/* Hi, {register.name} */}
            </h2>
            <p className="text-white text-center font-light">
              Please upload your selfie
            </p>
            <div className="mb-4 mt-6">
              <div className="mb-3">
                <button
                  onClick={handleSignUp}
                  className="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
                >
                  Sign Up Now
                </button>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <button className="block w-full bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light px-6 py-4 text-lg rounded-full">
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

async function getData() {
  try {
    const token = Cookies.get("token");
    const apiUrl = process.env.API_URL;
    const fetchUser = await axios.post(`${apiUrl}/users/fetch`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = fetchUser.data.data;
    return userData;
  } catch (error) {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }
}

export default UploadProfilePage;
