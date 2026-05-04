import { cn } from "@/utils/cn";
import { THero } from "@/utils/types/types";
import Button from "../button/Button";
import profilePic from "@/assets/img/profile.jpeg";

import "./hero.css";

export default function Hero({ links, className }: THero) {
  return (
    <section className={cn("hero-section-block", className)}>
      {/* The frosted glass layer */}
      <div className="mask" />

      {/* The background image that gets blurred */}
      <img
        src={profilePic}
        alt="Adonay D'Agosto - Developer Profile"
        className="background-visual"
      />

      <div className="content-hero">
        <div className="text-hero-container">
          <h2 className="font-medium tracking-[0.2em] uppercase opacity-90">
            Hi ✋🏾, here is Ado.
          </h2>

          <h1 className="uppercase font-bold leading-tight">
            A Software Developer.
          </h1>

          <p className="font-light leading-relaxed max-w-2xl opacity-80">
            Building high-performance, interactive digital experiences with a
            focus on clean code and creative design.
          </p>

          <div className="hero-btn-wrapper">
            {links &&
              links.length > 0 &&
              links.map((link, idx) => (
                <Button key={idx} btnHerf={link.href} className="text-white-02">
                  {link.text}
                </Button>
              ))}
          </div>
        </div>

        {/* Brand Initials Overlay */}
        <div className="absolute hidden xl:block bottom-16 right-12 pointer-events-none select-none">
          <span className="text-[10rem] font-black opacity-10 text-white">
            A.D
          </span>
        </div>
      </div>
    </section>
  );
}
