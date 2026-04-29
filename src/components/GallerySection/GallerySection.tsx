import GalleryCard from "../GalleryCard/GalleryCard";
import { TServices } from "@/utils/types/types";

export default function GallerySection({
  services,
}: {
  services: TServices[];
}) {
  return (
    <section className="w-full">
      {/* Grid wrapper following your .projects-card-wrapper logic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
        {services.map((service, idx) => (
          <GalleryCard key={service.id || idx} service={service} />
        ))}
      </div>
    </section>
  );
}
