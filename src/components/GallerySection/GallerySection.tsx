import Button from "../button/Button";
import GalleryCard from "../GalleryCard/GalleryCard";

// Type
import { TServices } from "@/utils/types/types";

// Helper function
import { getAnimationDelay } from "@/utils/functions";

export default function GallerySection({
  services,
}: {
  services: TServices[];
}) {
  const isOdd = services.length % 2 !== 0;

  return (
    <section className="w-full">
      <div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-wrap -m-4 lg:grid lg:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <GalleryCard
              service={service}
              key={idx}
              animationDelay={getAnimationDelay(idx)}
              className={`animate-fade-up animate-once animate-duration-[2000ms] animate-ease-in-out h-[50vh]
                ${
                  isOdd && idx === services.length - 1
                    ? "lg:col-span-2  lg:h-[60vh] lg:w-[70%] lg:mx-auto"
                    : ""
                }`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button btnHerf="products" className="w-[250px] hidden">
            See more
          </Button>
        </div>
      </div>
    </section>
  );
}
