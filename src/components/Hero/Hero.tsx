import { cn } from "@/utils/cn";
import { THero } from "@/utils/types/types";
import Button from "../button/Button";
import profilePic from "@/assets/img/profile.jpeg";

// 1. Import the styles object
import stylesObject from "./hero.module.css";

// 2. Cast to Record<string, string> to satisfy TS18046 (type 'unknown')
const styles = stylesObject as Record<string, string>;

export default function Hero({ links, className }: THero) {
  return (
    // FIX: Use 'styles' (the casted variable) instead of 'stylesObject'
    <section className={cn(styles["hero-section-block"], className)}>
      <div className={styles.mask} />

      <img
        src={profilePic}
        alt="Background Visual"
        className={styles["background-visual"]}
      />

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

        <div className="absolute hidden xl:block bottom-16 right-12 pointer-events-none select-none">
          <span className="text-[10rem] font-black opacity-10 text-textColor">
            A.D
          </span>
        </div>
      </div>
    </section>
  );
}
