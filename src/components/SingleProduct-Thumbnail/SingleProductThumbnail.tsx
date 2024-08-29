import { Thumbnail } from "@/utils/types/types";

type TSingleProductThumbnail = {
  thumbnail: Thumbnail;
};

export default function SingleProductThumbnail({
  thumbnail,
}: TSingleProductThumbnail) {
  return (
    <>
      <div className="flex items-center mx-auto p-0 md:p-2 lg:p-4 rounded-xs overflow-hidden">
        <img
          src={thumbnail.src}
          alt={thumbnail.alt}
          className="w-full max-w-5xl h-auto max-h-[80vh] rounded-lg object-cover saturate-150 contrast-120 hue-rotate-10"
        />
      </div>
    </>
  );
}
