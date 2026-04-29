import { cn } from "@/utils/cn";
import { THero } from "@/utils/types/types";
import Button from "../button/Button";
import profilePic from "@/assets/img/profile.jpeg";

// Ensure the filename matches exactly (e.g., hero.module.css)
import stylesObject from "./hero.module.css";
const styles = stylesObject as Record<string, string>;

export default function Hero({ links, className }: THero) {
  return (
    <section className={cn(stylesObject["hero-section-block"], className)}>
      {/* 1. Background Mask Layer (Gradient) */}
      <div className={styles.mask} />

      {/* 2. Background Visual (The profile image) */}
      <img
        src={profilePic}
        alt="Background Visual"
        className={styles["background-visual"]}
      />

      {/* 3. Content Container (Centered 1200px) */}
      <div className={styles["content-hero"]}>
        <div className={styles["text-hero-container"]}>
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

          {/* 4. Button Wrapper */}
          <div className={styles["hero-btn-wrapper"]}>
            {links &&
              links.length > 0 &&
              links.map((link, idx) => (
                <Button key={idx} btnHerf={link.href}>
                  {link.text}
                </Button>
              ))}
          </div>
        </div>

        {/* 5. Floating Decorative Initials (Uses global utility classes) */}
        <div className="absolute hidden xl:block bottom-16 right-12 pointer-events-none select-none">
          <span className="text-[10rem] font-black opacity-10 text-textColor">
            A.D
          </span>
        </div>
      </div>
    </section>
  );
}
