import { cn } from "@/utils/cn";
import { THero } from "@/utils/types/types";
import Button from "../button/Button";
import profilePic from "@/assets/img/profile.jpeg";

import "./hero.css";

// 2. Cast to Record<string, string> to satisfy TS18046 (type 'unknown')

export default function Hero({ links, className }: THero) {
  return (
    <section className={cn("hero-section-block", className)}>
      <div className={"mask"} />

      <img
        src={profilePic}
        alt="Background Visual"
        className={"background-visual"}
      />

      <div className={"content-hero"}>
        <div className={"text-hero-container"}>
          <h2 className="text-md font-medium tracking-wider uppercase">
            Hi ✋🏾, here is Ado.
          </h2>

          <h1 className="uppercase font-bold leading-tight">
            A Frontend Developer.
          </h1>

          <p className="text-lg opacity-90">
            Building high-performance, interactive digital experiences with a
            focus on clean code and creative design.
          </p>

          <div className={"hero-btn-wrapper"}>
            {links &&
              links.length > 0 &&
              links.map((link, idx) => (
                <Button key={idx} btnHerf={link.href}>
                  {link.text}
                </Button>
              ))}
          </div>
        </div>

        <div className="absolute hidden xl:block bottom-16 right-12 pointer-events-none select-none">
          <span className="text-[10rem] font-black opacity-10 text-textColor">
            A.D
          </span>
        </div>
      </div>
    </section>
  );
}
