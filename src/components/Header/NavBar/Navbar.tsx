import { cn } from "@/utils/cn";

type NavbarProps = {
  toggleMenu: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Navbar({
  toggleMenu,
  children,
  className,
}: NavbarProps) {
  return (
    <nav
      className={cn(
        // Mobile: Starts from top-left | Desktop: Centered row or static
        "fixed inset-0 h-screen w-full bg-background z-[55000] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "flex flex-col justify-start items-start p-8 pt-32", // Mobile: Top-left alignment
        "lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:flex-row lg:justify-center lg:items-center lg:p-0 lg:translate-y-0 lg:visible",
        toggleMenu
          ? "translate-y-0 visible"
          : "-translate-y-full invisible lg:visible",
        className,
      )}
    >
      <ul
        className={cn(
          "flex flex-col list-none uppercase gap-y-10", // Mobile: Vertical stack
          "lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0", // Desktop: Horizontal row
        )}
      >
        {children}
      </ul>
    </nav>
  );
}
