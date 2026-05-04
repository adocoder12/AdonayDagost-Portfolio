import { useState, useMemo, Suspense, lazy } from "react";
import { TServices, Thumbnail } from "@/utils/types/types";
import Loader from "../Loader/Loader";
import { cn } from "@/utils/cn";

const SingleProductThumbnails = lazy(
  () => import("../SingleProduct-Thumbnails/SingleProductThumbnails"),
);
const SingleProductThumbnail = lazy(
  () => import("../SingleProduct-Thumbnail/SingleProductThumbnail"),
);

export default function SingleProduct({
  description,
  thumbnails,
  thumbnail,
}: TServices) {
  const [selectedThumbnail, setSelectedThumbnail] = useState<Thumbnail>(
    thumbnails[0] || thumbnail,
  );
  const mainThumbnail = useMemo(() => selectedThumbnail, [selectedThumbnail]);

  return (
    <section className={cn("flex flex-col min-h-screen text-black-02 pb-24")}>
      {/* Editorial Header */}
      <div className="mt-8 flex items-center gap-4">
        <div className="h-0.5 w-12 bg-decorator" />
        <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60">
          Case Study_
        </span>
      </div>

      {/* Hero Showcase Section */}
      <div className="w-full mt-12 flex flex-col gap-8">
        <div className=" overflow-hidden shadow-2xl bg-white/5 border border-white/10">
          <Suspense fallback={<Loader />}>
            <SingleProductThumbnail thumbnail={mainThumbnail} />
          </Suspense>
        </div>

        {/* Thumbnails moved directly under the main image */}
        <div className="w-full m-auto">
          <Suspense
            fallback={<div className="animate-pulse bg-white/5 h-20 " />}
          >
            <SingleProductThumbnails
              thumbnails={thumbnails}
              mainThumbnail={mainThumbnail}
              onSelectThumbnail={(t) => setSelectedThumbnail(t)}
            />
          </Suspense>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="mt-16 max-w-4xl">
        <h5 className=" font-light text-black-03 leading-relaxed text-justify md:text-left  first-letter:text-3xl first-letter:font-bold first-letter:mr-0.5">
          {description}
        </h5>
      </div>

      {/* Projects Navigation */}
      <div className="mt-20 pt-10 border-t border-white/10">
        <button
          onClick={() => window.history.back()}
          className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] hover:text-decorator transition-colors hover:cursor-pointer"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-300">
            ←
          </span>
          Return to Projects
        </button>
      </div>
    </section>
  );
}
