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
    <section className="flex flex-col lg:grid lg:grid-cols-2 gap-2 mx-auto py-10 w-full bg-content/5 rounded-lg shadow-md">
      {/* Photo Section */}
      <div className="grid gap-4 order-2 lg:order-0">
        <div className=" p-6  h-[50vh] rounded-lg inset-0 flex justify-center items-center hadow-lg overflow-hidden ">
          <img
            src={mainThumbnail.src}
            alt={mainThumbnail.alt}
            className="w-full  object-cover saturate-150 contrast-120 hue-rotate-10 ]"
          />
        </div>

        <div className="ml-6 mr-6 p-4 rounded-sm bg-content/5 shadow-lg order-0 ">
          <ul className="flex justify-around space-x-8">
            {thumbnails!.map((thumbnail, index) => (
              <li key={index}>
                <img
                  className="h-20 max-w-full  active:outline-decorator outline outline-offset-4 outline-black   rounded-md hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  onClick={() => setSelectedThumbnail(thumbnail)}
                />
              </li>
            ))}
          </ul>
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
