import Link from "next/link";
import React from "react";

const MobileMenu = () => {
  return (
    <ul className="bg-[#010409dd] w-[200px] sm:hidden absolute top-20 right-5  py-4 flex flex-col items-center justify-center space-y-4 px-2 rounded-lg shadow-lg">
      <li className=" w-full  text-center p-2 rounded-lg cursor-pointer place-items-center text-white  sm:text-lg font-semibold hover:bg-[#1e20248f]  ">
        <Link href="#" className="text-white">
          Home
        </Link>
      </li>
      <li className=" w-full  text-center p-2 rounded-lg cursor-pointer  place-items-center text-white  sm:text-lg font-semibold hover:bg-[#1e20248f]  ">
        <Link href="#about" className="text-white">
          About
        </Link>
      </li>
      <li className=" w-full  text-center p-2 rounded-lg cursor-pointer  place-items-center text-white  sm:text-lg font-semibold hover:bg-[#1e20248f]  ">
        <Link href="#skills" className="">
          Skills
        </Link>
      </li>
      <li className=" w-full  text-center p-2 rounded-lg cursor-pointer  place-items-center text-white  sm:text-lg font-semibold hover:bg-[#1e20248f]  ">
        <Link href="#contact" className="">
          Contact us
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
