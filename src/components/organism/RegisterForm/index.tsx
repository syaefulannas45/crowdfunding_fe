import { Input } from "@/components";
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  return (
    <div className="w-full lg:w-1/2 px-10 lg:px-0">
      <h2 className="font-normal mb-6 text-3xl text-white">Sign Up Account</h2>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Write Your Name Here"
            value=""
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Occupation"
            type="text"
            placeholder="Write your occupation here"
            value=""
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Email Address"
            type="text"
            placeholder="Write your email address here"
            value=""
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Password"
            type="password"
            placeholder="Type your password here"
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <button className="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full">
            Continue Sign Up
          </button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-white text-md">
          Already have account ?{" "}
          <Link href="/login" className="no-underline text-orange-button">
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
