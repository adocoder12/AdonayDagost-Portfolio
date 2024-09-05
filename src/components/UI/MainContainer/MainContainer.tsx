import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

type MainContainer_Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainContainer({
  children,
  className,
}: MainContainer_Props) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        `flex flex-col items-center  gap-y-1  mt-24 justify-between w-[calc(100%-24px)] pb-7`,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
