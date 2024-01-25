"use client";
import { Input } from "@/components";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import Cookies from "js-cookie";

export interface RegisterForm {
  name: string;
  occupation: string;
  email: string;
  password: string;
}
const RegisterForm = () => {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    occupation: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      const apiUrl = process.env.API_URL;
      const register = await axios.post(`${apiUrl}/users`, form);
      const token = register.data.data.token;
      Cookies.set("token", token, { sameSite: "None", secure: true });
      router.push("/register/upload");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full lg:w-1/2 px-10 lg:px-0">
      <h2 className="font-normal mb-6 text-3xl text-white">Sign Up Account</h2>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Write Your Name Here"
            value={form.name}
            name="name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Occupation"
            type="text"
            placeholder="Write your occupation here"
            value={form.occupation}
            onChange={handleChange}
            name="occupation"
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Email Address"
            type="text"
            placeholder="Write your email address here"
            value={form.email}
            name="email"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            label="Password"
            type="password"
            placeholder="Type your password here"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <button
            onClick={handleSignUp}
            className="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
          >
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
