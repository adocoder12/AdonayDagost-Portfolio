import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";

//icons
import { MdArrowOutward } from "react-icons/md";

type ButtonProps = {
  children: React.ReactNode;
  btnHerf?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  btnHerf,
  type = "button",
  className,
  ...attributes
}: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (btnHerf?.startsWith("http")) {
      window.open(btnHerf, "_blank", "noopener,noreferrer");
    } else if (btnHerf) {
      navigate(`/${btnHerf}`);
    }
  };
  return (
    <div
      className={cn(
        "inline-flex items-center relative  group w-full",
        className
      )}
    >
      {/* Button Background */}
      {/* <div className="absolute w-full h-full bg-decorator top-1 left-1 rounded-md z-[0] group-hover:scale-[1.02]" /> */}

      {/* Button */}
      <button
        type={type}
        {...attributes}
        className={cn(
          " flex items-center space-x-2 p-[15px] w-full  underline underline-offset-2 rounded-md text-sm font-bold z-10 text-title bg-transparent capitalize active:scale-95 group-hover:scale-[1.02] hover:cursor-pointer  "
        )}
        onClick={handleClick}
      >
        <span>{children}</span>
        <MdArrowOutward size={12} />
      </button>
    </div>
  );
}
