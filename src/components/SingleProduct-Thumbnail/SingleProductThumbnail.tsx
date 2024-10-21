import { Thumbnail } from "@/utils/types/types";

type TSingleProductThumbnail = {
  thumbnail: Thumbnail;
};

export default function SingleProductThumbnail({
  thumbnail,
}: TSingleProductThumbnail) {
  return (
    <>
      <div className="flex items-center mx-auto p-2 lg:p-4 w-full aspect-video overflow-hidden">
        <img
          src={thumbnail.src}
          alt={thumbnail.alt}
          className="w-full h-auto  rounded object-cover"
        />
      </div>
    </>
  );
}
