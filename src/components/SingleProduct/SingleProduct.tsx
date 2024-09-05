import { useState, useMemo, Suspense, lazy } from "react";

//types
import { TServices, Thumbnail } from "@/utils/types/types";
//components
import Loader from "../Loader/Loader";
import SingleProductThumbnail from "../SingleProduct-Thumbnail/SingleProductThumbnail";
const SingleProductThumbnails = lazy(
  () => import("../SingleProduct-Thumbnails/SingleProductThumbnails")
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
    <section className="grid p-2 md:p-4 w-full min-h-screen   text-content">
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
        <p className="text-highlight text-lg leading-relaxed mt-6 text-wrap">
          {description}
        </p>
      </div>
    </section>
  );
}
