import { cn } from "@/utils/cn";
import { useNavigate } from "react-router-dom";

// Types
import { TServices } from "@/utils/types/types";

type GalleryCardProps = {
  service: TServices;
  className?: string;
  animationDelay: string;
};

export default function GalleryCard({
  service,
  animationDelay,
  className,
}: GalleryCardProps) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/projects/${service.id}`);
  };

  return (
    <div
      onClick={handleOnClick}
      className={cn("w-full cursor-pointer", className)}
      style={{ animationDelay }}
    >
      <div className="relative h-full flex ">
        <img
          alt={service.thumbnail.alt}
          className="absolute inset-0 w-full h-full object-fill lg:object-fill-cover "
          src={service.thumbnail.src}
        />
        <div className="relative flex flex-col  justify-center items-center  w-full h-full  lg:gap-y-3 px-8 py-10 rounded-lg  z-10 outline outline-offset-1 outline-2 outline-content bg-decorator opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="outline  outline-offset-[20px] md:outline-offset-[60px] outline-content mx-auto text-center">
            <h1 className="text-lg md:text-xl uppercase font-medium  text-content mb-3">
              {service.title}
            </h1>
            <h2 className="tracking-widest text-lg md:text-xl font-medium text-content mb-1">
              {service.subtitle}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
