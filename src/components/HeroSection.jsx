"use client"; 
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="text-[#eaf0f6] mb-4 font-extrabold text-4xl sm:text-5xl lg:text-6xl ">
            Hello, I'm{" "} <br />
            <span className="text-[#00BAFE]">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Kolawole Adetola",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "a Fullstack Developer",
                  1000,
                  
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base  sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            fringilla turpis. Nullam euismod, ex a dapibus ultricies, est libero
            fermentum ex, sit amet tincidunt mi turpis nec ante.{" "}
          </p>
          <div className="">
            <button className="rounded-full mr-4 w-full sm:w-fit px-6 py-3 bg-white hover:bg-slate-200 text-black cursor-pointer  ">
              Hire me
            </button>
            <button className="rounded-full mr-4 w-full sm:w-fit px-6 py-3 bg-transparent hover:bg-gray-900 text-white border border-white mt-3 cursor-pointer  ">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] size-[250px] lg:size-[300px] p-4 relative ">
            <Image
              src="/images/Happy.svg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
