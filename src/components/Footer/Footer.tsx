import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

//contact icons
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import NavItem from "../Header/NavItem/NavItem";

export default function Footer() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About me", link: "/about-me" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/adocoder12",
      mediaColor: "#333",
      icon: <FaGithub size={30} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/adonay-dagosto/",
      mediaColor: "#0077B5",
      icon: <FaLinkedin size={30} />,
    },
    {
      name: "Email",
      link: "mailto:adonay.jadal@gmail.com",
      icon: <IoMail size={30} />,
    },
  ];

  return (
    <footer className="w-full p-8 bg-mainColor/20 shadow-md text-content ">
      <div className="flex flex-col items-start justify-around gap-8 md:flex-row ">
        {/* Footer Branding */}
        {/* <img
          src="https://www.js-craft.io/wp-content/uploads/2023/06/biker_cat.webp"
          alt="logo-ct"
          className="rounded-md w-24 h-24 md:w-32 md:h-32"
        /> */}

        <h3 className="text-xl md:text-2xl font-bold text-blue-gray-900 uppercase">
          Adonay D'agosto
        </h3>

        {/* Navigation Links */}
        <ul className="flex flex-col justify-start flex-wrap  gap-y-2">
          {navLinks.map(({ name, link }) => (
            <li key={link}>
              <NavItem name={name} link={link} />
            </li>
          ))}
        </ul>

        {/* contact information */}
        <ul className="flex flex-col justify-start flex-wrap  gap-y-6">
          <li className="flex items-center  gap-x-2 hover:scale-105 hover:text-black">
            <p>
              <FaPhoneAlt size={15} />
            </p>
            <Link
              rel="noopener noreferrer"
              className=" font-normal text-md transition-colors  uppercase "
              aria-label={"phone number"}
              to="tel:+358400168892"
            >
              {"+358400168892"}
            </Link>
          </li>
          <li className="flex items-center  gap-x-2 hover:scale-105 hover:text-black">
            <p>
              <FaRegEnvelope size={15} />
            </p>
            <Link
              rel="noopener noreferrer"
              className=" font-normal text-md transition-colors "
              aria-label={"email address"}
              to="mailto:adonay.jadal@gmail.com"
            >
              {"adonay.jadal@gmail.com"}
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <div className="flex flex-col items-center  gap-y-2 md:gap-y-0   justify-around  md:flex-row ">
        <p className="text-xs md:text-md order-1 md:order-1">
          &copy; 2024 Kinuski Inc.
        </p>
        {/* Social Media Links */}
        <div className="flex items-center gap-x-6  order-2 md:order-1">
          {socialLinks.map(({ name, link, icon, mediaColor }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-gray-900 text-2xl transition-colors"
              style={{
                color: "inherit",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = mediaColor || "#997a66")
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              aria-label={name}
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="text-xs md:text-md leading-loose w-full max-w-[250px] order-0 md:order-1">
          “Talk is cheap. Show me the code.” - Linus Torvalds
        </p>
      </div>
    </footer>
  );
}
