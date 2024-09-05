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
      className={cn(
        "flex flex-col items-center gap-y-1 cursor-pointer max-w-3xl  w-full  h-full ",
        className
      )}
    >
      <img
        alt={service.thumbnail.alt}
        className=" w-full h-[70%] "
        src={service.thumbnail.src}
      />
      <div className="flex flex-col items-center gap-y-0 ">
        <h2 className="text-md md:text-lg uppercase   font-medium  text-content mb-3">
          {service.title}
        </h2>
        <h4 className="tracking-widest text-sm md:text-md font-medium text-content ">
          {service.subtitle}
        </h4>
      </div>
    </div>
  );
}
