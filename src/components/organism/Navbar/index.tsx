"use client";
import { ICLogo } from "@/assets";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [token, setToken] = useState<string | undefined>("");
  useEffect(() => {
    const tokenCookie = Cookies.get("token");
    setToken(tokenCookie);
  }, []);

  const pagesWithoutNavAndFooter = [
    "/login",
    "/register",
    "/register/upload",
    "/register/success",
    "/project",
    "/project/fund-success",
    "/dashboard",
    "/dashboard/transactions",
    "/dashboard/detail",
  ];
  const pathname = usePathname();

  const hideNavbar = pagesWithoutNavAndFooter.includes(pathname);
  {
    if (!hideNavbar) {
      const linkText = token === undefined ? "Sign Up" : "My Account";
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
          <div className="flex ml-auto items-center mt-2">
            <Link
              href={`${token === undefined ? "/register" : "/dashboard"}`}
              className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
            >
              {linkText}
            </Link>
          </div>
        </header>
      );
    }
  }
};

export default Navbar;
