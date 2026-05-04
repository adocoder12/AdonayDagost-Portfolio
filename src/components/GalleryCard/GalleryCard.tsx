import { useNavigate } from "react-router-dom";
import { TServices } from "@/utils/types/types";
import { cn } from "@/utils/cn";

type GalleryCardProps = {
  service: TServices;
  className?: string;
};

export default function GalleryCard({ service, className }: GalleryCardProps) {
  const navigate = useNavigate();

  // Logic to determine if a valid thumbnail exists
  const hasThumbnail = service.thumbnail && service.thumbnail.src;

  return (
    <div
      onClick={() => navigate(`/projects/${service.id}`)}
      className={cn(
        "group flex flex-col w-full h-full cursor-pointer transition-all duration-300 hover:-translate-y-2",
        className,
      )}
    >
      <div className="w-full aspect-square overflow-hidden bg-white/5 rounded-[5px] border border-white/5 relative flex items-center justify-center">
        {hasThumbnail ? (
          <img
            alt={service.thumbnail.alt}
            src={service.thumbnail.src}
            className="w-full h-full object-cover object-center block transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Fallback UI: Shows the title if no image is present */
          <div className="flex items-center justify-center p-6 text-center bg-black-01 w-full h-full">
            <h2 className="font-black uppercase text-black-02 tracking-tighter  opacity-60 group-hover:opacity-100 transition-opacity">
              {service.title}_
            </h2>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow pt-6 px-1">
        <div className="text-start flex-grow">
          <h3 className="font-black uppercase text-black-02 tracking-tighter text-lg md:text-content leading-tight mb-1">
            {service.title}_
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-decorator mb-4">
            {service.subtitle}
          </p>
          <p className="text-sm md:text-base text-black-03 font-light leading-relaxed line-clamp-3 opacity-70">
            {service.description}
          </p>
        </div>

        <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <span>View Project</span>
          <span className="text-decorator">→</span>
        </div>
      </div>
    </div>
  );
}
