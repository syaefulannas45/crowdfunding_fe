import { ICAvatarAdd, ILAvatar } from "@/assets";
import Image from "next/image";
import React from "react";

const UploadProfilePage = () => {
  return (
    <section className="antiliased">
      <div className="auth-page">
        <div className="container mx-auto h-screen flex justify-center items-center">
          <div className="w-full lg:w-1/3 px-10 lg:px-0">
            <div className="flex justify-center items-center mx-auto mb-4 w-40">
              <div className="relative">
                <a href="/upload-filled">
                  <Image
                    src={ILAvatar}
                    alt=""
                    className="rounded-full border-white border-4"
                  />
                  <div className="absolute right-0 bottom-0 pb-2">
                    <ICAvatarAdd />
                  </div>
                </a>
              </div>
            </div>
            <h2 className="font-normal mb-3 text-3xl text-white text-center">
              Hi, Julia
            </h2>
            <p className="text-white text-center font-light">
              Please upload your selfie
            </p>
            <div className="mb-4 mt-6">
              <div className="mb-3">
                <button className="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full">
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

export default UploadProfilePage;
