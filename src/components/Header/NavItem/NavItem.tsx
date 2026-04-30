import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

type NavItemProps = {
  name: string;
  link: string;
  setToggleMenu?: (toggle: boolean) => void;
  index: number;
  isMobile: boolean;
};

export default function NavItem({
  name,
  link,
  setToggleMenu,
  index,
  isMobile,
}: NavItemProps) {
  return (
    <NavLink
      to={link}
      onClick={() => setToggleMenu?.(false)}
      className={({ isActive }) =>
        cn(
          "relative group text-body font-medium transition-all duration-500 block ",
          isActive ? "text-decorator" : "text-textColor",
          // Mobile staggered animation logic
          isMobile
            ? "opacity-100 translate-y-0"
            : "lg:opacity-100 lg:translate-y-0 opacity-0 translate-y-10",
        )
      }
      style={{
        transitionDelay: isMobile ? `${200 + index * 70}ms` : "0ms",
      }}
    >
      {name}
      {/* Premium underline hover effect */}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-decorator transition-all duration-300 group-hover:w-full"></span>
    </NavLink>
  );
}
