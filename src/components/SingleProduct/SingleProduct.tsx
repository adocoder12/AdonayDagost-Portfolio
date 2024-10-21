import { useState, useMemo, Suspense, lazy } from "react";

//types
import { TServices, Thumbnail } from "@/utils/types/types";
//components
import Loader from "../Loader/Loader";

const SingleProductThumbnails = lazy(
  () => import("../SingleProduct-Thumbnails/SingleProductThumbnails")
);

const SingleProductThumbnail = lazy(
  () => import("../SingleProduct-Thumbnail/SingleProductThumbnail")
);

export default function SingleProduct({
  subtitle,
  description,
  thumbnails,
}: TServices) {
  const [selectedThumbnail, setSelectedThumbnail] = useState<Thumbnail>();

  const mainThumbnail = useMemo(() => {
    return selectedThumbnail || thumbnails[0];
  }, [selectedThumbnail, thumbnails]);

  const onSelectThumbnail = (thumbnail: Thumbnail) => {
    setSelectedThumbnail(thumbnail);
  };

  return (
    <section className="grid p-2 md:p-4 max-w-7xl min-h-screen   text-content">
      {/* Photo Section */}
      <div className="flex p-3 flex-col lg:flex-row lg:flex-1 gap-4 bg-content/5 rounded-lg shadow-md order-2">
        <Suspense fallback={<Loader />}>
          <SingleProductThumbnail thumbnail={mainThumbnail} />
        </Suspense>

        <SingleProductThumbnails
          thumbnails={thumbnails}
          mainThumbnail={mainThumbnail}
          onSelectThumbnail={onSelectThumbnail}
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-between p-6">
        <h1 className="text-primary text-3xl font-bold mb-4">{subtitle}</h1>
        <hr className="border-decorator border-2 b-4 max-w-[96%]" />
        <p className="text-highlight text-lg leading-loose  mt-6 text-justify">
          {description}
        </p>
      </div>
    </section>
  );
}
