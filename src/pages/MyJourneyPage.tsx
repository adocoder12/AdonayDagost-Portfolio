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
          content="Explore the professional journey of Adonay D'agosto, a Full Stack developer specializing in Go, React, and high-performance web applications."
        />
      </Helmet>

      {/* Updated header to reflect software developer identity */}
      <PagesHeader
        secondaryTitle="Hi, I’m Adonay D'agosto"
        description="A software developer who loves to code, skate and play guitar."
      />
      <div className="container-sized">
        <div className="flex flex-col gap-y-8 py-6 md:py-10 text-content mb-8 ">
          <p className="text-base leading-loose md:text-lg md:leading-loose lg:text-xl lg:leading-loose font-light text-justify md:text-left">
            I’m a software developer who lives for the "aha!" moment that point
            where complex logic finally clicks into a clean, efficient solution.
            Whether I’m architecting a Go backend or perfecting a trick on my
            skateboard, I’m driven by the same thing: the challenge of building
            something great from the ground up.
          </p>

          <p className="text-base leading-loose md:text-lg md:leading-loose lg:text-xl lg:leading-loose font-light text-justify md:text-left">
            My journey started in the frontend with React, TypeScript, and
            Tailwind, where I fell in love with how design and functionality
            bring ideas to life. As my curiosity grew, I moved deeper into the
            stack to expand my impact beyond the browser. Today, I build
            end-to-end applications, from designing high-performance REST APIs
            in Golang to crafting professional custom WordPress themes with Sage
            (Roots).
          </p>

          <p className="text-base leading-loose md:text-lg md:leading-loose lg:text-xl lg:leading-loose font-light text-justify md:text-left">
            I believe in writing code that isn't just functional, but clean and
            maintainable for the whole team. When I’m not at my desk, you’ll
            often find me skating, mastering a new riff on the guitar, or
            playing a game of football with friends. Staying active keeps my
            mind sharp and energized for the next coding challenge.
          </p>
        </div>
      </div>
      <div className="container-sized pb-20">
        <h3 className="text-2xl font-semibold mb-8 border-b pb-2">
          Technical Milestones
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Milestone 1: The Foundation */}
          <div>
            <h4 className="font-bold text-lg">
              Full-Stack Development Specialist
            </h4>
            <p className="text-sm opacity-80">Udemy / 2025</p>
            <ul className="mt-2 list-disc list-inside text-sm font-light leading-relaxed">
              <li>Deep dive into Laravel 12 & PHP backend architecture.</li>
              <li>Integration of Inertia.js with React for seamless SPAs.</li>
            </ul>
          </div>

          {/* Milestone 2: Professional Degree */}
          <div>
            <h4 className="font-bold text-lg">Web Development Degree</h4>
            <p className="text-sm opacity-80">Omnia / 2023-2024</p>
            <ul className="mt-2 list-disc list-inside text-sm font-light leading-relaxed">
              <li>Specialization in PHP, SQL, and Python frameworks.</li>
              <li>Advanced Frontend studies in TypeScript and React.</li>
            </ul>
          </div>

          {/* Milestone 3: Current Focus */}
          <div>
            <h4 className="font-bold text-lg">Go & High-Performance Systems</h4>
            <p className="text-sm opacity-80">
              Independent Study & Projects / 2026
            </p>
            <ul className="mt-2 list-disc list-inside text-sm font-light leading-relaxed">
              <li>Building type-safe REST APIs with Golang.</li>
              <li>
                Custom session management and auth middleware implementation.
              </li>
            </ul>
          </div>

          {/* Milestone 4: Early Background */}
          <div>
            <h4 className="font-bold text-lg">Datanomi Qualification</h4>
            <p className="text-sm opacity-80">
              Savon Ammattiopisto / 2019-2022
            </p>
            <p className="mt-2 text-sm font-light leading-relaxed">
              The start of my IT journey, focusing on software design and the
              fundamentals of object-oriented programming.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
