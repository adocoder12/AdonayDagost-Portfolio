import { Thumbnail } from "@/utils/types/types";

type TSingleProductThumbnail = {
  thumbnail: Thumbnail;
};

export default function SingleProductThumbnail({
  thumbnail,
}: TSingleProductThumbnail) {
  return (
    <>
      <div className="flex-2 flex justify-center items-center p-0 md:p-2 lg:p-4 rounded-xs overflow-hidden">
        <img
          src={thumbnail.src}
          alt={thumbnail.alt}
          className="w-full  md-w[80%]  h-auto max-h-[80vh] rounded-lg object-cover saturate-150 contrast-120 hue-rotate-10"
        />
      </div>
    </>
  );
}
