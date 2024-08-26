import React from "react";
import { cn } from "@/utils/cn";

type MainContainer_Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainContainer({
  children,
  className,
}: MainContainer_Props) {
  return (
    <main
      className={cn(
        `flex flex-col items-center  gap-y-4  mt-24 justify-between w-[calc(100%-24px)] pb-7`,
        className
      )}
    >
      {children}
    </main>
  );
}
