import Banner from "@/components/Banner/Banner";

import GallerySection from "@/components/GallerySection/GallerySection";
import PagesHeader from "@/components/PagesHeader/PagesHeader";

import { TServices } from "@/utils/types/types";

export default function ServicesPage({ services }: { services: TServices[] }) {
  return (
    <>
      <PagesHeader description="Welcome to my portfolio! Here, you'll find a selection of my most recent projects, each one a reflection of my passion for technology, design, and problem-solving. From web development to app design, every project represents a unique challenge that I’ve tackled with dedication and creativity." />
      <Banner title=" My Projects" />
      <GallerySection services={services} />
    </>
  );
}