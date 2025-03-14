import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-[#010409] ">
      <div class="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </div>
  );
}
