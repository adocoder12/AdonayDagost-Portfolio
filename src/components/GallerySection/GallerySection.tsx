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
  // const isOdd = services.length % 2 !== 0;
  // ${
  //   isOdd && idx === services.length - 1
  //     ? "lg:col-span-2  lg:h-[60vh] lg:w-[70%] lg:mx-auto"
  //     : ""
  // }

  return (
    <>
      <div className="grid grid-cols-1  p-6 lg:grid-cols-2  gap-y-4 md:gap-5 max-w-7xl  ">
        {services.map((service, idx) => (
          <div
            className=" flex flex-col items-center justify-center gap-y-4 p-4 lg:gap-x-1  text-content lg:last:col-span-full    "
            key={idx}
          >
            <GalleryCard
              service={service}
              animationDelay={getAnimationDelay(idx)}
              className={``}
            />
          </div>
        ))}
      </div>
      <div className=" justify-center mt-10 hidden">
        <Button btnHerf="products" className="w-[250px] ">
          See more
        </Button>
      </div>
    </>
  );
}
