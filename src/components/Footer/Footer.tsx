import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "My journey", link: "/my-journey" },
    { name: "Projects", link: "/projects" },
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
    <footer className="w-full p-8 bg-mainColor shadow-md text-content">
      <div className="flex flex-col items-center justify-around gap-8 md:flex-row">
        {/* Footer Branding */}
        {/* <img
          src="https://www.js-craft.io/wp-content/uploads/2023/06/biker_cat.webp"
          alt="logo-ct"
          className="rounded-md w-24 h-24 md:w-32 md:h-32"
        /> */}
        <h3 className="text-2xl font-bold text-blue-gray-900 uppercase">
          Adonay D'agosto
        </h3>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center gap-x-8">
          {navLinks.map(({ name, link }) => (
            <li key={link}>
              <Link
                rel="noopener noreferrer"
                className="relative font-normal text-md transition-colors uppercase  group "
                to={link}
                aria-label={name}
              >
                {name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[3px] bg-decorator transition-all group-hover:scale-105 group-hover:w-full `}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Links */}
        <div className="flex items-center gap-x-6">
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
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <p className="text-center font-normal">&copy; 2024 Kinuski Inc.</p>
    </footer>
  );
}
