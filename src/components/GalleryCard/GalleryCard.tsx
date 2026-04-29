import { useNavigate } from "react-router-dom";
import { TServices } from "@/utils/types/types";
import { cn } from "@/utils/cn";

type GalleryCardProps = {
  service: TServices;
  className?: string;
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
        "group flex flex-col w-full cursor-pointer transition-all duration-300 hover:-translate-y-2",
        className,
      )}
    >
      {/* 
          Flexible Image Container 
          Removed 'aspect-square' so the height isn't forced.
          Added 'max-h-[400px]' (adjust as needed) to keep grid items uniform.
      */}
      <div className="w-full max-h-[450px] overflow-hidden bg-white/5 rounded-sm border border-white/5 flex items-center justify-center">
        <img
          alt={service.thumbnail.alt}
          src={service.thumbnail.src}
          /* 
             Using h-auto ensures the image stays in proportion.
             Removed all scale and rotate hover classes.
          */
          className="w-full h-auto object-contain block"
        />
      </div>

      {/* Description Section */}
      <div className="flex flex-col pt-6 px-1">
        <div className="text-start">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-content leading-tight mb-1">
            {service.title}_
          </h2>

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-decorator mb-4">
            {service.subtitle}
          </p>

          <p className="text-content text-sm md:text-base font-light leading-relaxed line-clamp-3 opacity-70">
            {service.description}
          </p>
        </div>

        {/* Keeping the 'Archive' text as the only subtle hover indicator */}
        <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View Archive_</span>
          <span className="text-decorator">→</span>
        </div>
      </div>
    </div>
  );
}
