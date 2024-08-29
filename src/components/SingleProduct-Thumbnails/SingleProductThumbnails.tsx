import { Thumbnail } from "@/utils/types/types";

type TSingleProductThumbnail = {
  thumbnails: Thumbnail[];
  mainThumbnail: Thumbnail;
  onSelectThumbnail: (thumbnail: Thumbnail) => void;
};

export default function SingleProductThumbnails({
  thumbnails,
  mainThumbnail,
  onSelectThumbnail,
}: TSingleProductThumbnail) {
  return (
    <>
      <div className="grid grid-cols-2 my-auto  items-center gap-4 p-4 rounded-sm  md:mx-auto  md:grid-cols-4 md:max-w-fit lg:flex lg:flex-col lg:flex-nowrap  lg:max-h-[80vh] lg:w-1/4  overflow-auto">
        {thumbnails!.map((thumbnail, index) => (
          <div
            className="flex justify-center  lg:justify-center snap-start p-2"
            key={index}
          >
            <img
              className={`w-[160px]  max-h-48 object-cover  rounded-lg hover:scale-105  md:w-[190px]  transition-transform duration-200 ease-in-out cursor-pointer  ${
                mainThumbnail.src === thumbnail.src
                  ? "outline outline-[3px] outline-decorator "
                  : "outline outline-[3px] outline-black"
              }`}
              src={thumbnail.src}
              alt={thumbnail.alt}
              onClick={() => onSelectThumbnail(thumbnail)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
