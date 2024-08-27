import { TServices } from "@/utils/types/types";
import { useState, useMemo } from "react";

export default function SingleProduct({
  subtitle,
  description,
  thumbnails,
  thumbnail,
}: TServices) {
  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnail);

  const mainThumbnail = useMemo(() => {
    // Complex logic to determine the main thumbnail
    // Example: returning the first thumbnail by default or some other logic
    return selectedThumbnail || thumbnails[0];
  }, [selectedThumbnail, thumbnails]);

  return (
    <section className="grid mx-auto p-10 w-full   text-content">
      {/* Photo Section */}
      <div className="flex p-3 flex-col lg:flex-row lg:flex-1 gap-4 bg-content/5 rounded-lg shadow-md order-2">
        <div className="flex-2 flex justify-center items-center p-0 md:p-2 lg:p-4 rounded-lg overflow-hidden">
          <img
            src={mainThumbnail.src}
            alt={mainThumbnail.alt}
            className="w-full h-auto max-h-[80vh] object-cover saturate-150 contrast-120 hue-rotate-10"
          />
        </div>

        <div className="grid grid-cols-2   items-center gap-4 p-4 rounded-sm  md:mx-auto  md:grid-cols-4 md:max-w-fit lg:flex lg:flex-col lg:flex-nowrap  lg:max-h-[80vh] lg:w-1/4  overflow-auto">
          {thumbnails!.map((thumbnail, index) => (
            <div
              className="flex justify-start lg:justify-center snap-start p-2"
              key={index}
            >
              <img
                className={`w-[100px] max-w-full  max-h-48 object-cover  rounded-md hover:scale-105  md:w-[160px] lg:w-full  transition-transform duration-200 ease-in-out cursor-pointer  ${
                  mainThumbnail.src === thumbnail.src
                    ? "outline outline-[3px] outline-decorator "
                    : "outline outline-[3px] outline-black"
                }`}
                src={thumbnail.src}
                alt={thumbnail.alt}
                onClick={() => setSelectedThumbnail(thumbnail)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-between p-6">
        <div>
          <h1 className="text-primary text-3xl font-bold mb-4">{subtitle}</h1>
          <hr className="border-decorator border-2 b-4 max-w-[96%]" />
          <p className="text-highlight text-lg leading-relaxed mt-6 text-wrap">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
