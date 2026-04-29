import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import CollectionSections from "@/components/sections/Collectionsections";
import MoodyTealConcept from "@/components/sections/MoodyTealConcept";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MoodyTealConcept />
      <CollectionSections />
    </>
  );
}
