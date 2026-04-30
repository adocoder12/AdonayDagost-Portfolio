import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BurgerIcon from "@/components/UI/icons/BurgerIcon";
import CloseIcon from "@/components/UI/icons/CloseIcon";
import Navbar from "./NavBar/Navbar";
import NavItem from "./NavItem/NavItem";
import { cn } from "@/utils/cn";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "About Me", link: "/about-me" },
];

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 h-[70px] right-0 z-[60000] w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-background/85 backdrop-blur-md shadow-lg py-4"
          : "bg-background py-6",
      )}
    >
      <div className="max-w-[1512px] mx-auto w-full flex items-center justify-between px-[20px] lg:px-[52px]">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-bold uppercase tracking-tight text-colorText z-[99999]"
          >
            Adonay D'Agosto
          </Link>
        </div>

        <Navbar toggleMenu={toggleMenu}>
          {navLinks.map(({ name, link }, index) => (
            <li key={link}>
              <NavItem
                name={name}
                link={link}
                setToggleMenu={setToggleMenu}
                index={index}
                isMobile={toggleMenu}
              />
            </li>
          ))}
        </Navbar>

        <div className="flex lg:hidden items-center relative z-[99999]">
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className={cn(
              "focus:outline-none transition-all duration-400 p-2 rounded-lg bg-white/5",
              toggleMenu && "rotate-90",
            )}
            aria-label="Toggle Menu"
          >
            {!toggleMenu ? (
              <BurgerIcon className="w-[30px] h-[30px] text-textColor [" />
            ) : (
              <CloseIcon className="w-[30px] h-[30px] text-textColor " />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
