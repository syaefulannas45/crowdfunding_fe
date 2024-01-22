import { ILOP } from "@/assets";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="antiliased">
      <div className="auth-page">
        <div className="h-screen flex justify-center items-center">
          <div className="hidden md:block lg:w-1/3 bg-white h-full auth-background  rounded-tr-lg rounded-br-lg">
            <Image src={ILOP} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
            <div className="w-full lg:w-1/2 px-10 lg:px-0">
              <h2 className="font-normal mb-6 text-3xl text-white">
                Sign In to Your Account
              </h2>
              <div className="mb-6">
                <div className="mb-4">
                  <label className="font-normal text-lg text-white block mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                    placeholder="Write your email address here"
                    value="julia.keeva@gmail.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="mb-4">
                  <label className="font-normal text-lg text-white block mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    className="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                    placeholder="Write your password here"
                    value="nasigorenglimaribbu"
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="mb-4">
                  <button className="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full">
                    Sign In
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white text-md">
                  Don't have account ?{" "}
                  <a
                    href="/register"
                    className="no-underline text-orange-button"
                  >
                    Sign Up
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
