import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Components
import Hero from "@/components/Hero/Hero";
import SkillsComponentList from "@/components/SkillsComponent/SkillsComponentList";
import Loader from "@/components/Loader/Loader";
import Button from "@/components/button/Button";

// Lazy Loaded Sections
const GallerySection = lazy(
  () => import("@/components/GallerySection/GallerySection"),
);

// Types & Utils
import { TServices } from "@/utils/types/types";
import { capitalizeFirstLetter } from "@/utils/functions";

const btnLinks = [{ text: "View Archive", href: "projects" }];

export default function HomePage({ services }: { services: TServices[] }) {
  const { pathname } = useLocation();

  const currentPage =
    pathname === "/"
      ? "Home"
      : capitalizeFirstLetter(pathname.replace("/", ""));

  return (
    <>
      <Helmet>
        <title>Adonay D'agosto | {currentPage}</title>
        <meta
          name="description"
          content="Explore the digital archive of Adonay D'agosto, a frontend developer dedicated to crafting interactive experiences through code and design."
        />
      </Helmet>

      {/* Hero Section */}
      <Hero links={btnLinks} />

      <div className="container-sized">
        {/* Editorial Introduction */}
        <section className="flex flex-col items-center justify-center text-center py-20 gap-y-10">
          <p className="text-xl leading-relaxed md:text-3xl md:leading-snug lg:text-4xl lg:leading-tight font-light text-content max-w-5xl italic">
            "My passion for creativity and problem-solving led me to explore
            frontend development. The moment I crafted my first webpage, I was
            <span className="text-decorator font-bold"> captivated</span> by the
            power to transform ideas into interactive digital experiences."
          </p>
          <Button className="mx-auto" btnHerf="about-me">
            Explore My Journey_
          </Button>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col py-20 gap-y-12 border-t border-white/5">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-textColor">
              Technical Stack_
            </h2>
            <p className="text-sm md:text-lg opacity-60 uppercase tracking-widest font-bold">
              Skills I've honed to excel as a developer
            </p>
          </div>
          <SkillsComponentList />
        </section>

        {/* Gallery Section */}
        <section className="flex flex-col py-20 gap-y-12 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-textColor leading-[0.85]">
              Mastering <br /> the Craft_
            </h2>
            <p className="font-light text-md md:text-xl leading-relaxed text-justify opacity-80">
              Innovation, creativity, and passion converge in the projects I’ve
              curated. Each piece reflects a commitment to excellence and a love
              for problem-solving—representing a unique challenge tackled with
              technical expertise.
            </p>
          </div>

          <Suspense fallback={<Loader />}>
            <GallerySection services={services} />
          </Suspense>

          <div className="flex justify-center mt-10 self-end">
            <Button btnHerf="projects">Browse All Projects</Button>
          </div>
        </section>
      </div>
    </>
  );
}
