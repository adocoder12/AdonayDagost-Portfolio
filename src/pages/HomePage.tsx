import Hero from "@/components/Hero/Hero";
import GallerySection from "@/components/GallerySection/GallerySection";

//type
import { TServices } from "@/utils/types/types";

const btnLinks = [
  { text: "Resume", href: "Resume" },
  { text: "My Projects", href: "products" },
];

export default function HomePage({ services }: { services: TServices[] }) {
  return (
    <>
      <Hero
        links={btnLinks}
        className="animate-fade animate-once animate-duration-[2000ms] animate-delay-[10ms] animate-ease-in-out"
      />
      <div className="flex flex-col text-center gap-y-8 w-full mt-16 mb-4">
        <h1 className="text-3xl md:text-6xl font-medium title-font text-title">
          Mastering the Craft: My Projects
        </h1>
        <p className="lg:w-2/3 mx-auto text-content md:text-2xl">
          Innovation, creativity, and passion come together in the projects I’ve
          crafted. Each project reflects a commitment to excellence and a love
          for problem-solving, whether it's developing intuitive user
          interfaces, building scalable web applications, or exploring the
          latest in tech trends. Below, you’ll find a selection of my recent
          work, each piece representing a unique challenge that I’ve tackled
          with dedication and expertise.
        </p>
      </div>
      <GallerySection services={services} />
    </>
  );
}
