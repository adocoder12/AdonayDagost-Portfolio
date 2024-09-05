import Hero from "@/components/Hero/Hero";
import GallerySection from "@/components/GallerySection/GallerySection";
import SkillsComponentList from "@/components/SkillsComponent/SkillsComponentList";

//type
import { TServices } from "@/utils/types/types";
import Button from "@/components/button/Button";

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
      <section className="grid grid-cols-1 items-center   md:max-w-screen-lg  text-center p-5 gap-y-8 w-full  my-6 ">
        <p
          className="text-lg w-full md:text-xl lg:text-2xl text-center  text-content "
          style={{ lineHeight: "1.9" }}
        >
          " My passion for creativity and problem-solving led me to explore
          frontend development. <br></br> The moment I crafted my first webpage,
          I was hooked—fascinated by the power to transform ideas into
          interactive digital experiences"
        </p>
        <Button className="mx-auto w-auto" btnHerf="projects">
          Know more About my journey
        </Button>
      </section>

      {/* SKils section */}
      <section className=" grid grid-cols-1   py-3 md:py-5 space-y-8 text-content text-2xl leading-tight max-w-6xl mb-8">
        <h2 className="text-xl  md:text-4xl font-semibold leading-tight">
          Skills I've honed to excel as a frontend developer.
        </h2>

        <SkillsComponentList />
      </section>

      {/* GALLERY SECTION */}
      <section className=" grid min-h-screen grid-cols-1  py-3  md:py-5 space-y-8 text-content text-2xl leading-tight max-w-6xl mb-8">
        <h2 className="text-xl   md:text-4xl font-semibold leading-tight">
          Mastering the Craft:
        </h2>
        <p className="font-light text-lg lg:text-xl leading-relaxed  text-wrap">
          Innovation, creativity, and passion come together in the projects I’ve
          crafted. Each project reflects a commitment to excellence and a love
          for problem-solving, whether it's developing intuitive user
          interfaces, building scalable web applications, or exploring the
          latest in tech trends. Below, you’ll find a selection of my recent
          work, each piece representing a unique challenge that I’ve tackled
          with dedication and expertise.
        </p>
        <GallerySection services={services} />
      </section>
    </>
  );
}
