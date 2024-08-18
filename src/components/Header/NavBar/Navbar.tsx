import { cn } from "@/utils/cn";

type NavbarProps = {
  toggleMenu: boolean;
  children: React.ReactNode;
  onclick?: () => void;
  className?: string;
};

export default function Navbar({
  toggleMenu,
  children,
  onclick,
  className,
}: NavbarProps) {
  return (
    <>
      <nav
        onClick={onclick}
        className={cn(
          ` absolute lg:min-h-fit lg:static  min-h-[24vh] left-0  ${
            toggleMenu ? "top-[100%]" : "  top-[-300%]"
          } z-[2]
          }] lg:w-auto items-center justify-between  duration-300 px-5 w-full bg-slate-100`,
          className
        )}
      >
        <ul className="flex  flex-col md:items-center lg:flex-row md:gap-8 gap-2 my-3  list-none uppercase bg-inherit">
          {children}
        </ul>
      </nav>
    </>
  );
}
