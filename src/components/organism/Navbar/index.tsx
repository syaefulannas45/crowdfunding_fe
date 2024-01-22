import { ICLogo } from "@/assets";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center relative z-10 px-12 pt-10">
      <div style={{ height: 54 }} className="pr-5 h-full">
        <ICLogo />
      </div>
      <ul className="flex items-center">
        <li>
          <Link
            className="text-white hover:text-teal-500 text-lg px-4 py-3"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-teal-500 text-lg px-4 py-3"
            href="/projects.html"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-teal-500 text-lg px-4 py-3"
            href="/features.html"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-teal-500 text-lg px-4 py-3"
            href="/story.html"
          >
            Success Stories
          </Link>
        </li>
      </ul>
      <ul className="flex ml-auto items-center mt-2">
        <li>
          <Link
            href="/register"
            className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
          >
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
          >
            My Account
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
