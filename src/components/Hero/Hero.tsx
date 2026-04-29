import { cn } from "@/utils/cn";
import { THero } from "@/utils/types/types";
import Button from "../button/Button";
import profilePic from "@/assets/img/profile.jpeg";

// Use the lowercase name as seen in Screenshot 2026-04-29 at 19.47.42.png
import stylesObject from "./hero.module.css";

// This cast resolves the TS18046: 'styles' is of type 'unknown' error
const styles = stylesObject as Record<string, string>;

export default function Hero({ links, className }: THero) {
  return (
    <section className={cn(styles["hero-section-block"], className)}>
      <div className={styles.mask} />
      {/* Ensure you use 'styles' (the casted variable) for all references */}
      <img
        src={profilePic}
        alt="Background"
        className={styles["background-visual"]}
      />
      <div className={styles["content-hero"]}>
        {/* ... rest of your component */}
      </div>
    </section>
  );
}
