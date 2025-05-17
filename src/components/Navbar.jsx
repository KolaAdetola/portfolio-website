"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/20/solid";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="bg-[#010409]/10 backdrop-blur-lg shadow-lg fixed w-full top-0 left-0 z-50  ">
      <div className="flex items-center justify-between px-5 py-2 flex-wrap mx-auto  ">
        <Link href={"/"} className="text-5xl text-white text-semibold">
          <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        </Link>
        <div className="mobile-menu sm:hidden block cursor-pointer ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex cursor-pointer size-8 items-center justify-center border border-slate-200 rounded hover:border-white text-slate-200  "
            >
              <Bars3Icon className="size-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex size-8 items-center justify-center border border-slate-200 rounded hover:border-white text-slate-200  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="menu hidden sm:block sm:w-auto " id="navbar">
          <ul className="flex flex-col sm:flex-row items-center sm:space-x-4   ">
            <li className="  p-2 rounded-lg cursor-pointer place-items-center text-white  sm:text-lg font-semibold">
              <Link href="#" className="text-white">
                Home
              </Link>
            </li>
            <li className="  p-2 rounded-lg cursor-pointer  place-items-center text-white  sm:text-lg font-semibold">
              <Link href="#about" className="text-white">
                About
              </Link>
            </li>
            <li className="  p-2 rounded-lg cursor-pointer  place-items-center text-white  sm:text-lg font-semibold">
              <Link href="#skills" className="">
                Skills
              </Link>
            </li>
            <button className="btn btn-info  sm:text-lg font-semibold rounded-lg cursor-pointer place-items-center text-white">
              <Link href="#contact" className="text-white">
                Contact Me
              </Link>
            </button>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MobileMenu />:null}
    </nav>
  );
};

export default Navbar;
