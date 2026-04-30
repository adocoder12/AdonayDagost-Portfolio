import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { cn } from "@/utils/cn";
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
    <footer className={cn("w-full bg-inherit  mt-2 border-t border-white/5")}>
      {/* Aligns content with the 1512px site grid */}
      <div className={cn("max-w-[1512px] mx-auto px-6 md:px-[52px] py-12")}>
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          {/* Branding Section */}
          <div className="flex flex-col gap-4">
            <h3 className=" text-black-02 font-bold uppercase tracking-tighter ">
              Adonay D'agosto
            </h3>
            <p className=" text-small  max-w-[250px] text-black-02/60  leading-relaxed italic">
              “Talk is cheap. Show me the code.” <br /> — Linus Torvalds
            </p>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col gap-4">
            <h6 className="font-bold uppercase tracking-widest text-black">
              Navigation
            </h6>
            <ul className="flex flex-col gap-y-2">
              {navLinks.map(({ name, link }) => (
                <li key={link}>
                  {/* index=0 and isMobile=false prevents unwanted menu animations in footer */}
                  <NavItem name={name} link={link} index={0} isMobile={true} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4">
            <h6 className="font-bold uppercase tracking-widest text-black">
              Contact
            </h6>
            <ul className="flex flex-col gap-y-4">
              <li className="flex items-center gap-x-3 group cursor-pointer">
                <FaPhoneAlt
                  size={14}
                  className="text-decorator transition-transform group-hover:scale-110"
                />
                <a
                  href="tel:+358400168892"
                  className="text-body font-medium hover:text-decorator transition-colors uppercase tracking-tight"
                >
                  +358 400 168 892
                </a>
              </li>
              <li className="flex items-center gap-x-3 group cursor-pointer">
                <FaRegEnvelope
                  size={14}
                  className="text-decorator transition-transform group-hover:scale-110"
                />
                <a
                  href="mailto:adonay.jadal@gmail.com"
                  className="text-body font-medium hover:text-decorator transition-colors"
                >
                  adonay.jadal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col items-center gap-y-6 md:flex-row justify-between">
          <p className="text-small text-black/50 order-2 md:order-1">
            &copy; 2026 Kinuski Inc. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-x-6 order-1 md:order-2">
            {socialLinks.map(({ name, link, icon, mediaColor }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-02/80 hover:scale-110 transition-all duration-300"
                style={{ "--hover-color": mediaColor } as React.CSSProperties}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    mediaColor || "var(--color-decoration)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
