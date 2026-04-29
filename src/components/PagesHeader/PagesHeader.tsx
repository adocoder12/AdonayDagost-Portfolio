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
        "flex flex-col justify-center items-start md:items-center text-content border-b border-white/5",
        className,
      )}
    >
      <div className="flex flex-col gap-y-6 justify-center py-12 md:py-20 text-content w-full">
        {/* Main Title with the underscore aesthetic */}
        <h2 className="text-4xl md:text-7xl font-extrabold leading-tight uppercase tracking-tighter text-content">
          {title ? `${title}_` : `${page}_`}
        </h2>

        {/* Secondary Title / Introduction */}
        {secondaryTitle && (
          <h3 className="text-xl md:text-4xl font-bold leading-tight uppercase text-content/90">
            {secondaryTitle}
          </h3>
        )}

        {/* Paragraph Description */}
        {description && (
          <p className="text-content text-lg md:text-2xl font-light max-w-4xl leading-relaxed text-justify md:text-left opacity-80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
