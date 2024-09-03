import { cn } from "@/utils/cn";
import { useNavigate } from "react-router-dom";

// Types
import { TServices } from "@/utils/types/types";

type GalleryCardProps = {
  service: TServices;
  className?: string;
  animationDelay?: string;
};

export default function GalleryCard({ service, className }: GalleryCardProps) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/projects/${service.id}`);
  };

  return (
    <div
      onClick={handleOnClick}
      className={cn("flex flex-col  gap-y-2 cursor-pointer", className)}
    >
      <img
        alt={service.thumbnail.alt}
        className=" w-full sm:h-5/6 lg:h-[400px]   "
        src={service.thumbnail.src}
      />
      <div className="flex flex-col gap-y-0 ">
        <h2 className="text-md md:text-lg uppercase font-medium  text-content mb-3">
          {service.title}
        </h2>
        <h4 className="tracking-widest text-sm md:text-md font-medium text-content ">
          {service.subtitle}
        </h4>
      </div>
    </div>
  );
}
