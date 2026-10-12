import { useState, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { TServices, Thumbnail } from "@/utils/types/types";
import { cn } from "@/utils/cn";
import Modal from "@/components/modal/modal";

const SingleProductThumbnails = lazy(
  () => import("../SingleProduct-Thumbnails/SingleProductThumbnails"),
);

export default function SingleProduct({
  description,
  thumbnails,
  thumbnail,
  repo,
  live,
}: TServices) {
  const navigate = useNavigate();
  const [selectedThumbnail, setSelectedThumbnail] = useState<Thumbnail>(
    thumbnails?.[0] ?? thumbnail,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImage = (t: Thumbnail) => {
    setSelectedThumbnail(t);
    setIsModalOpen(true);
  };

  const goBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/projects");
  };

  const links = [
    { label: "View Source Code", href: repo },
    { label: "Visit Live Site", href: live },
  ].filter((link) => link.href);

  return (
    <section
      className={cn(
        "flex flex-col justify-center text-White-02 pb-12",
        "px-4 md:px-0",
      )}
    >
      {/* Narrative Section */}
      <div className="mt-16 max-w-6xl">
        <p className="font-light text-text leading-relaxed text-justify md:text-left first-letter:text-2xl first-letter:font-bold first-letter:mr-0.5">
          {description}
        </p>
      </div>

      {/* External Links */}
      {links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] hover:text-decorator transition-colors"
            >
              {link.label}
              <span className="text-decorator group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                ↗
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Thumbnails: click opens the image in a modal */}
      {thumbnails?.length > 0 && (
        <div className="w-full mt-8">
          <Suspense
            fallback={<div className="animate-pulse bg-white/5 h-20" />}
          >
            <SingleProductThumbnails
              thumbnails={thumbnails}
              mainThumbnail={selectedThumbnail}
              onSelectThumbnail={openImage}
            />
          </Suspense>
        </div>
      )}

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img
          src={selectedThumbnail.src}
          alt={selectedThumbnail.alt}
          className="max-w-full max-h-full object-contain rounded-[5px]"
        />
      </Modal>

      {/* Projects Navigation */}
      <div className="mt-20 pt-10 border-t border-white/10">
        <button
          type="button"
          onClick={goBack}
          className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] hover:text-decorator transition-colors cursor-pointer"
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
