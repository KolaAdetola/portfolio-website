"use client";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certications from "@/components/Certications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
import AnimatedStats from "@/components/Stat";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen w-full bg-[#010409]"
    >
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <About />
        <Skills />
        <AnimatedStats />
        <Certications />
        <Analytics/>
        <Contact />
      </div>
      <Footer />
    </motion.div>
  );
}
