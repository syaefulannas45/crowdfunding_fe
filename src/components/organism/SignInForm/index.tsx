import { Input } from "@/components";
import Link from "next/link";
import React from "react";

const SignForm = () => {
  return (
    <div className="w-full lg:w-1/2 px-10 lg:px-0">
      <h2 className="font-normal mb-6 text-3xl text-white">
        Sign In to Your Account
      </h2>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value=""
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Password"
            type="password"
            value=""
            placeholder="Enter your password"
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
          <Link href="/register" className="no-underline text-orange-button">
            Sign Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignForm;
