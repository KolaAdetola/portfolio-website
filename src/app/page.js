import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-[#010409] ">
      <Navbar/>
      <div class="container mx-auto  px-12 py-4">
        <HeroSection />
      </div>
    </div>
  );
}
