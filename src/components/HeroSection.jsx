"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  "/images/Happy.svg",
  "/images/tears.svg",
  "/images/tongue.svg",
  "/images/knuckle.svg",
  "/images/wink.svg",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageKey, setImageKey] = useState(0); // triggers re-render for fade

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setImageKey((key) => key + 1); // force key change for AnimatePresence
        return nextIndex;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="mt-24 px-4 scroll-m-28" aria-label="Hero Section">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        {/* Text Section */}
        <motion.div
          className="col-span-7 place-self-center text-center sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#eaf0f6] dark:text-white mb-4 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
            Hello, I'm <br />
            <span className="text-[#00BAFE]">
              <TypeAnimation
                sequence={[
                  "Kolawole Adetola",
                  1500,
                  "a Fullstack Developer",
                  1500,
                  "a Software Engineer",
                  1500,
                  "a Tech Enthusiast",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] dark:text-gray-300 mb-6 text-base sm:text-lg lg:text-xl">
            I specialize in crafting responsive, full-stack web applications
            using React, Next.js, Node.js, and more. My mission is to solve
            real-world problems with technology that scales.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <Link
              href="#contact"
              scroll={true}
              aria-label="Navigate to Contact Section"
              className="rounded-full w-full sm:w-fit px-6 py-3 bg-white hover:bg-slate-200 text-black text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Let's Work Together
            </Link>
            <a
              href="https://drive.google.com/file/d/1FwPPEz2Mwc7q_7QIY-ZVPTN49_qdFQS1/view"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="rounded-full w-full sm:w-fit px-6 py-3 bg-transparent hover:bg-gray-900 text-white border-2 border-white mt-3 sm:mt-0 text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View My Resume (PDF)
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="col-span-5 place-self-center mt-4 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="rounded-full bg-[#181818] size-[250px] lg:size-[300px] p-4 relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={imageKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Image
                  priority
                  src={images[currentImageIndex]}
                  alt="Animated hero image"
                  width={300}
                  height={300}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
