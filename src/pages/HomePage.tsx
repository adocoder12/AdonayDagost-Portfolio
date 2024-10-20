import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

//component
import Hero from "@/components/Hero/Hero";
import GallerySection from "@/components/GallerySection/GallerySection";
import SkillsComponentList from "@/components/SkillsComponent/SkillsComponentList";

//type
import { TServices } from "@/utils/types/types";
import Button from "@/components/button/Button";

//utils
import { capitalizeFirstLetter } from "@/utils/functions";

const btnLinks = [
  // { text: "Resume", href: "Resume" },
  { text: "Know more About me", href: "projects" },
];

export default function HomePage({ services }: { services: TServices[] }) {
  const location = useLocation();

  const currentPage =
    location.pathname === "/"
      ? "HomePage"
      : capitalizeFirstLetter(location.pathname.replace("/", ""));

  return (
    <>
      <Helmet>
        <title>Adonay D'agosto | {currentPage}</title>
        <meta name="description" content="Portfolio projects" />
      </Helmet>

      <Hero links={btnLinks} />
      <section className="grid grid-cols-1 items-center   md:max-w-screen-xl  text-center p-5 gap-y-8 w-full  my-6 ">
        <p
          className="text-lg w-full md:text-xl lg:text-2xl text-center  text-content "
          style={{ lineHeight: "1.9" }}
        >
          " My passion for creativity and problem-solving led me to explore
          frontend development. <br></br> The moment I crafted my first webpage,
          I was by the power to transform ideas into interactive digital
          experiences "
        </p>
        <Button className="mx-auto w-auto" btnHerf="projects">
          Know more About my journey
        </Button>
      </section>

      {/* SKils section */}
      <section className=" grid grid-cols-1   py-3 md:py-5 space-y-8 text-content text-2xl leading-tight max-w-7xl my-20">
        <h2 className="text-xl  md:text-4xl font-semibold leading-tight">
          Skills I've honed to excel as a frontend developer.
        </h2>

        <SkillsComponentList />
      </section>

      {/* GALLERY SECTION */}
      <section className=" grid min-h-screen grid-cols-1  py-3  md:py-5 space-y-8 text-content text-2xl leading-tight max-w-7xl mb-8">
        <h2 className="text-xl   md:text-4xl font-semibold leading-tight">
          Mastering the Craft:
        </h2>
        <p className="font-light text-lg lg:text-xl leading-relaxed  lg:max-w-md  text-wrap">
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
