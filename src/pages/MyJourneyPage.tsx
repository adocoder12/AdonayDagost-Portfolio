import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
//utils
import { capitalizeFirstLetter } from "@/utils/functions";

//components
import PagesHeader from "@/components/PagesHeader/PagesHeader";

export default function MyJourneyPage() {
  const location = useLocation();

  const currentPage =
    location.pathname === "/"
      ? "HomePage"
      : capitalizeFirstLetter(location.pathname.replace("/", ""));
  return (
    <>
      <Helmet>
        <title>Adonay D'agosto | {currentPage}</title>
        <meta
          name="description"
          content="Portfolio about-me Adonay D'agosto Coder "
        />
      </Helmet>
      <PagesHeader
        secondaryTitle="Hi, I’m Adonay D'agosto"
        description="A software developer who loves to code, skate and play guitar."
      />
      <div className="grid grid-cols-1 grid-rows-3 gap-y-4 max-w-5xl items-center py-3 md:py-1 text-content last:mb-12 lg:last:mb-32">
        <p className="text-sm leading-loose  md:text-md  md:leading-loose  lg:text-xl  lg:leading-loose  font-light text-justify ">
          I’m a frontend developer with a deep passion for creativity and
          problem-solving. From the moment I built my first webpage, I was
          hooked by how design and functionality bring ideas to life. Using
          HTML, CSS, JavaScript, React, Tailwind, and TypeScript, I focus on
          creating interactive, user-friendly experiences.
        </p>
        <p className="text-sm leading-loose  md:text-md  md:leading-loose  lg:text-xl  lg:leading-loose  font-light text-justify">
          As I explored more, I dove into advanced tools like React, Tailwind,
          and Django, unlocking new ways to build dynamic, scalable web apps. I
          love the challenge of designing responsive interfaces that work
          smoothly across devices, and seeing my projects come to life is the
          most rewarding part of what I do
        </p>
        <p className="text-sm leading-loose  md:text-md  md:leading-loose lg:text-xl  lg:leading-loose  font-light text-justify">
          When I’m not coding, I like to keep things fun and active. You’ll
          often find me skating, where I enjoy the freedom of cruising around
          and perfecting tricks. I also love playing guitar, letting creativity
          flow through music. And when it’s time to unwind, there’s nothing
          better than a game of football with friends to stay sharp and
          energized.
        </p>
      </div>
    </>
  );
}
