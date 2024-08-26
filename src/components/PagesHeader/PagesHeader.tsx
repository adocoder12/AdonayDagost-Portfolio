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
  const page = location.pathname.split("/")[1].replace(/-/g, " ");
  console.log(description?.split(" "));

  return (
    <>
      <section
        className={cn(
          " flex flex-col justify-center items-start  md:items-center   text-content",
          className
        )}
      >
        <div className="flex flex-col gap-y-6 justify-center py-12">
          <h2 className=" text-4xl md:text-6xl font-bold my-2  leading-tight uppercase">
            {title ? title + "_" : page + "_"}
          </h2>
          <h3 className="text-xl md:text-4xl font-bold my-2 leading-tight uppercase">
            {secondaryTitle}
          </h3>
          <p className="text-content text-lg font-normal max-w-3xl text-wrap ">
            {description}
          </p>
        </div>
      </section>
    </>
  );
}
