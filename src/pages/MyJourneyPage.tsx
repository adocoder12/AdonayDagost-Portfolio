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
        <meta name="description" content="Portfolio about-me" />
      </Helmet>
      <PagesHeader
        secondaryTitle="Hi, I’m Adonay D'agosto"
        description="a software developer who I loves to code, skate and play guitar."
      />
      <div className="grid grid-cols-1 w-full max-w-7xl gap-y-8 place-content-center py-3 md:py-5 text-content text-2xl">
        <p className="text-sm  md:text-md  font-light md:text-xl text-wrap  ">
          My journey into frontend development was fueled by a deep passion for
          creativity and problem-solving. From the moment I built my first
          simple webpage, I was captivated by the ability to bring ideas to life
          on the screen. The blend of design and functionality in frontend
          development allows me to express creativity while tackling complex
          challenges, which is something that has always driven me.
        </p>
        <p className="text-sm   md:text-md  font-light md:text-xl text-wrap  ">
          As I delved deeper into the world of web development, I became
          particularly fascinated by how frontend technologies like HTML, CSS,
          and JavaScript can be combined to create interactive, user-friendly
          experiences. This led me to explore more advanced tools and
          frameworks, such as React and TypeScript, which opened up new
          possibilities for building dynamic and scalable web applications.
        </p>
        <p className="text-sm  md:text-md  font-light md:text-xl text-wrap  ">
          My motivation grew stronger as I realized the impact that a
          well-crafted user interface can have on the overall user experience. I
          love the challenge of creating responsive designs that look and
          perform well across all devices. The satisfaction of seeing a
          beautifully designed, functional application in the hands of users is
          incredibly rewarding.
        </p>
      </div>
    </>
  );
}
