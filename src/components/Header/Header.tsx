import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
//components
import Navbar from "./NavBar/Navbar";
import NavItem from "./NavItem/NavItem";

const navLinks = [
  // {
  //   name: "About Me",
  //   link: "/about",
  // },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "My Journey",
    link: "/my-journey",
  },
];
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex items-center px-4 py-6  w-[calc(100%-24px)] mx-auto bg-mainColor top-0 fixed z-20  text-title  ">
      <div className="flex items-center justify-between lg:justify-around w-full mx-auto w-82  ">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold uppercase ">
            Adonay D'Agosto
          </Link>
        </div>
        <Navbar toggleMenu={toggleMenu} className="bg-mainColor">
          {navLinks.map(({ name, link }) => (
            <li key={link}>
              <NavItem name={name} link={link} setToggleMenu={setToggleMenu} />
            </li>
          ))}
        </Navbar>

        <FaBars
          className="lg:hidden"
          size={30}
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </div>
    </header>
  );
}
