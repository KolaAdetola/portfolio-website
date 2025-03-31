import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certications from "@/components/Certications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-[#010409] ">
      <Navbar/>
      <div class="container mx-auto  px-12 py-4">
        <HeroSection />
        <About/>
        <Skills/>
        <Certications/>
        <Contact/>
      </div>
    </div>
  );
}
