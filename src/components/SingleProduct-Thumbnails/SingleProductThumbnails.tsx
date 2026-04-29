import { Thumbnail } from "@/utils/types/types";
import { cn } from "@/utils/cn";

export default function SingleProductThumbnails({
  thumbnails = [],
  mainThumbnail,
  onSelectThumbnail,
}: {
  thumbnails: Thumbnail[];
  mainThumbnail: Thumbnail;
  onSelectThumbnail: (t: Thumbnail) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[20px] font-black tracking-[0.4em] uppercase opacity-80 text-textColor">
        Gallery Selection_
      </h4>

      {/* Changed to a horizontal scrollable strip or flex-wrap */}
      <div className="flex flex-wrap gap-4">
        {thumbnails.map((thumbnail, index) => {
          const isActive = mainThumbnail.src === thumbnail.src;
          return (
            <div
              key={index}
              onClick={() => onSelectThumbnail(thumbnail)}
              className={cn(
                "relative w-20 h-20 md:w-40 md:h-40 cursor-pointer overflow-hidden  transition-all duration-500",
                isActive
                  ? "ring-2 ring-decorator ring-offset-4 ring-offset-background opacity-100"
                  : "grayscale hover:grayscale-0 opacity-40 hover:opacity-100 border border-white/10",
              )}
            >
              <img
                src={thumbnail.src}
                alt={thumbnail.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
