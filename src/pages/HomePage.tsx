import Hero from "@/components/Hero/Hero";
import GallerySection from "@/components/GallerySection/GallerySection";

//type
import { TServices } from "@/utils/types/types";

const btnLinks = [
  // { text: "Resume", href: "Resume" },
  { text: "Know more About me", href: "projects" },
];

export default function HomePage({ services }: { services: TServices[] }) {
  return (
    <>
      <Hero
        links={btnLinks}
        className="animate-fade animate-once animate-duration-[2000ms] animate-delay-[10ms] animate-ease-in-out"
      />
      <div className="flex flex-col text-center gap-y-8 w-full mt-16 mb-4">
        <p
          className="text-3xl w-full mx-auto md:text-4xl max-w-screen-xl font-normal  text-content leading-[2.4]"
          style={{ lineHeight: "1.8" }}
        >
          "My passion for creativity and problem-solving led me to explore
          frontend development. The moment I crafted my first webpage, I was
          hooked—fascinated by the power to transform ideas into interactive
          digital experiences."
        </p>
      </div>
      <GallerySection services={services} />
    </>
  );
}
