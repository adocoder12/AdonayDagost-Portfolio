import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";

//component
import Hero from "@/components/Hero/Hero";
const GallerySection = lazy(
  () => import("@/components/GallerySection/GallerySection")
);
// import GallerySection from "@/components/GallerySection/GallerySection";
import SkillsComponentList from "@/components/SkillsComponent/SkillsComponentList";
import Loader from "@/components/Loader/Loader";

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
        <p className="text-md leading-relaxed w-full md:text-xl md:leading-relaxed lg:text-2xl  lg:leading-loose  text-center  text-content ">
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
      <section className=" grid grid-cols-1   py-3 md:py-5 space-y-8 text-content text-2xl max-w-7xl my-20">
        <h2 className="text-xl  md:text-4xl font-semibold leading-tight">
          Skills I've honed to excel as a frontend developer.
        </h2>

        <SkillsComponentList />
      </section>

      {/* GALLERY SECTION */}
      <section className=" grid min-h-screen grid-cols-1  py-3  md:py-5 space-y-8 text-content  max-w-7xl mb-8">
        <h2 className="text-xl   md:text-4xl font-semibold leading-tight">
          Mastering the Craft:
        </h2>
        <p className="font-light text-md leading-loose md:text-lg md:leading-loose lg:text-xl lg:leading-loose text-justify">
          Innovation, creativity, and passion come together in the projects I’ve
          crafted. Each project reflects a commitment to excellence and a love
          for problem-solving, whether it's developing intuitive user
          interfaces, building scalable web applications, or exploring the
          latest in tech trends. Below, you’ll find a selection of my recent
          work, each piece representing a unique challenge that I’ve tackled
          with dedication and expertise.
        </p>

        <Suspense fallback={<Loader />}>
          <GallerySection services={services} />
        </Suspense>
      </section>
    </>
  );
}
