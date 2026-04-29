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
  return <main className={cn(`main-container`, className)}>{children}</main>;
}
