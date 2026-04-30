import { useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";

type PagesHeaderProps = {
  className?: string;
  description?: string;
  title?: string;
  secondaryTitle?: string;
};

export default function PagesHeader({
  className,
  description,
  title,
  secondaryTitle,
}: PagesHeaderProps) {
  const location = useLocation();

  /* 
     Improved page logic: 
     1. Filters out empty strings from the split.
     2. Defaults to "Home" if no path exists.
     3. Replaces hyphens with spaces for a clean look.
  */
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const page =
    pathSegments.length > 0 ? pathSegments[0].replace(/-/g, " ") : "Home";

  return (
    <section
      className={cn(
        "flex flex-col justify-center items-start md:items-center  border-b border-white/5",
        className,
      )}
    >
      <div className="flex flex-col gap-y-6 justify-center py-12 md:py-20 text-black-02 w-full">
        {/* Main Title with the underscore aesthetic */}
        <h1 className=" font-extrabold leading-tight uppercase tracking-tighter text-content">
          {title ? `${title}_` : `${page}_`}
        </h1>

        {/* Secondary Title / Introduction */}
        {secondaryTitle && (
          <h2 className="font-bold leading-tight uppercase text-black-02">
            {secondaryTitle}
          </h2>
        )}

        {/* Paragraph Description */}
        {description && (
          <p className="text-black-02 text-lg md:text-xl font-light max-w-4xl leading-relaxed text-justify md:text-left opacity-80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
