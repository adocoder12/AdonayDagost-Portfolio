import Banner from "@/components/Banner/Banner";

import { lazy, Suspense } from "react";
//components
import Loader from "@/components/Loader/Loader";
const GallerySection = lazy(
  () => import("@/components/GallerySection/GallerySection")
);
import PagesHeader from "@/components/PagesHeader/PagesHeader";

import { TServices } from "@/utils/types/types";

export default function ServicesPage({ services }: { services: TServices[] }) {
  return (
    <>
      <PagesHeader
        secondaryTitle="Welcome to my portfolio!"
        description=" Here, you'll find a selection of my most recent projects, each one a reflection of my passion for technology, design, and problem-solving. From web development to app design, every project represents a unique challenge that I’ve tackled with dedication and creativity."
      />
      <Banner title=" My Projects" />

      <Suspense fallback={<Loader />}>
        <GallerySection services={services} />
      </Suspense>
    </>
  );
}
