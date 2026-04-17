import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import WorkGrid from "@/components/sections/WorkGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WorkGrid />
    </>
  );
}
