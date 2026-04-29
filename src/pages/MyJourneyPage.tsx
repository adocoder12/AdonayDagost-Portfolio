import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// utils
import { capitalizeFirstLetter } from "@/utils/functions";

// components
import PagesHeader from "@/components/PagesHeader/PagesHeader";

/**
 * MyJourneyPage Component
 * Displays the personal background and developer story of Adonay D'agosto.
 */
export default function MyJourneyPage() {
  const { pathname } = useLocation();

  // Logic to determine the page title for SEO based on the current path
  const currentPage =
    pathname === "/"
      ? "Home"
      : capitalizeFirstLetter(pathname.split("/").filter(Boolean).pop() || "");

  return (
    <>
      <Helmet>
        <title>Adonay D'agosto | {currentPage}</title>
        <meta
          name="description"
          content="Explore the professional journey of Adonay D'agosto, a frontend developer specializing in React, TypeScript, and interactive web experiences."
        />
      </Helmet>

      {/* Reusable header for internal pages */}
      <PagesHeader
        secondaryTitle="Hi, I’m Adonay D'agosto"
        description="A software developer who loves to code, skate and play guitar."
      />
      <div className="container-sized">
        <div className="flex flex-col gap-y-8 py-6 md:py-10 text-content mb-12 lg:mb-32">
          <p className="text-base leading-loose md:text-lg md:leading-loose lg:text-xl lg:leading-loose font-light text-justify md:text-left">
            I’m a frontend developer with a deep passion for creativity and
            problem-solving. From the moment I built my first webpage, I was
            hooked by how design and functionality bring ideas to life. Using
            HTML, CSS, JavaScript, React, Tailwind, and TypeScript, I focus on
            creating interactive, user-friendly experiences.
          </p>

          <p className="text-base leading-loose md:text-lg md:leading-loose lg:text-xl lg:leading-loose font-light text-justify md:text-left">
            As I explored more, I dove into advanced tools like React, Tailwind,
            and Django, unlocking new ways to build dynamic, scalable web apps.
            I love the challenge of designing responsive interfaces that work
            smoothly across devices, and seeing my projects come to life is the
            most rewarding part of what I do.
          </p>

          <p className="text-base leading-loose md:text-lg md:leading-loose lg:text-xl lg:leading-loose font-light text-justify md:text-left">
            When I’m not coding, I like to keep things fun and active. You’ll
            often find me skating, where I enjoy the freedom of cruising around
            and perfecting tricks. I also love playing guitar, letting
            creativity flow through music. And when it’s time to unwind, there’s
            nothing better than a game of football with friends to stay sharp
            and energized.
          </p>
        </div>
      </div>
    </>
  );
}
