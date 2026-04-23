import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import WorkGrid from "@/components/sections/WorkGrid";
import CollectionSections from "@/components/sections/Collectionsections";
import VisualCollections from "@/components/sections/Visualcollections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisualCollections />
      <CollectionSections />
      <WorkGrid />
    </>
  );
}
