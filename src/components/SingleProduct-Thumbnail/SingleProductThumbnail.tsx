import { Thumbnail } from "@/utils/types/types";
import { cn } from "@/utils/cn";

export default function SingleProductThumbnail({
  thumbnail,
}: {
  thumbnail: Thumbnail;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-transparent")}>
      <img
        src={thumbnail.src}
        alt={thumbnail.alt}
        /* Changed h-full to h-auto and removed aspect-video to show full image */
        className="w-full h-auto block object-contain "
        loading="eager"
      />
    </div>
  );
}
