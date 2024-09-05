import React from "react";
import { cn } from "@/utils/cn";

// import { useLocation } from "react-router-dom";

type MainContainer_Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainContainer({
  children,
  className,
}: MainContainer_Props) {
  return (
    <div
      className={cn(
        `flex flex-col items-center  gap-y-1  mt-24 justify-between w-[calc(100%-24px)] pb-7`,
        className
      )}
    >
      {children}
    </div>
  );
}
