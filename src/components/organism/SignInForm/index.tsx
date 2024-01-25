"use client";
import { Input } from "@/components";
import axios from "axios";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface SignInForm {
  email: string;
  password: string;
}
const SignForm = () => {
  const [form, setForm] = useState<SignInForm>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const API_URL = process.env.API_URL;
      const loginUser = await axios.post(`${API_URL}/sessions`, form);
      const dataUser = loginUser.data;
      const token = dataUser.data.token;
      Cookies.set("token", token, {
        sameSite: "None",
        secure: true,
      });

      setTimeout(() => {
        if (dataUser.meta.status === "success") {
          router.replace("/dashboard");
        }
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignIn} className="w-full lg:w-1/2 px-10 lg:px-0">
      <h2 className="font-normal mb-6 text-3xl text-white">
        Sign In to Your Account
      </h2>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            name="email"
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Password"
            type="password"
            value={form.password}
            placeholder="Enter your password"
            onChange={handleChange}
            name="password"
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full flex items-center justify-center h-[60px]"
          >
            {isLoading ? (
              <div className="border-t-2 border-r-2 animate-spin border-white rounded-full w-[20px] h-[20px]" />
            ) : (
              <p>Sign In</p>
            )}
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
    </form>
  );
};

export default SignForm;
