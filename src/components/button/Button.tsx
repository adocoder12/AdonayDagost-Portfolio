import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";

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
    <div className={cn("inline-flex relative mr-2 group w-full", className)}>
      {/* Button Background */}
      <div className="absolute w-full h-full bg-decorator top-1 left-1 rounded-sm z-[0] group-hover:scale-[1.02]" />

      {/* Button */}
      <button
        type={type}
        {...attributes}
        className={cn(
          "p-[15px]  w-full rounded-sm text-sm font-bold border z-10  border-white  text-black bg-transparent shadow-lg capitalize active:scale-95 hover:cursor-pointer hover:opacity-[0.8]"
        )}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}
