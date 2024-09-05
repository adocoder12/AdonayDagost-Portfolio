import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

//components
const GallerySection = lazy(
  () => import("@/components/GallerySection/GallerySection")
);
import Loader from "@/components/Loader/Loader";
import PagesHeader from "@/components/PagesHeader/PagesHeader";

//utils
import { capitalizeFirstLetter } from "@/utils/functions";
//types
import { TServices } from "@/utils/types/types";

export default function ServicesPage({ services }: { services: TServices[] }) {
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
      <PagesHeader
        secondaryTitle="Welcome to my portfolio!"
        description=" Here, you'll find a selection of my most recent projects, each one a reflection of my passion for technology, design, and problem-solving. From web development to app design, every project represents a unique challenge that I’ve tackled with dedication and creativity."
      />

      <Suspense fallback={<Loader />}>
        <GallerySection services={services} />
      </Suspense>
    </>
  );
}
