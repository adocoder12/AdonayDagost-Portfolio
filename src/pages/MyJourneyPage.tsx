import Banner from "@/components/Banner/Banner";
import PagesHeader from "@/components/PagesHeader/PagesHeader";
import SkillsComponentList from "@/components/SkillsComponent/SkillsComponentList";

export default function MyJourneyPage() {
  return (
    <>
      <PagesHeader
        secondaryTitle="Hi, I’m Adonay D´agosto"
        description="Junior Software developer , amateur cook & Skater, guitarist, tinkerer, and general curious person_"
      />
      <Banner title=" My Experience with the MERN Stack" />
      <div className=" w-fit grid place-content-center p-10 text-content text-2xl">
        <div className="flex flex-col p-4 space-y-3">
          <p className="text-lg  md:text-xl text-wrap mt-2   w-full">
            My journey into frontend development was fueled by a deep passion
            for creativity and problem-solving. From the moment I built my first
            simple webpage, I was captivated by the ability to bring ideas to
            life on the screen. The blend of design and functionality in
            frontend development allows me to express creativity while tackling
            complex challenges, which is something that has always driven me.
          </p>
          <p className="text-lg  md:text-xl text-wrap  ">
            As I delved deeper into the world of web development, I became
            particularly fascinated by how frontend technologies like HTML, CSS,
            and JavaScript can be combined to create interactive, user-friendly
            experiences. This led me to explore more advanced tools and
            frameworks, such as React and TypeScript, which opened up new
            possibilities for building dynamic and scalable web applications.
          </p>
          <p className="text-lg  md:text-xl text-wrap  ">
            My motivation grew stronger as I realized the impact that a
            well-crafted user interface can have on the overall user experience.
            I love the challenge of creating responsive designs that look and
            perform well across all devices. The satisfaction of seeing a
            beautifully designed, functional application in the hands of users
            is incredibly rewarding.
          </p>
        </div>
        <SkillsComponentList />
      </div>
    </>
  );
}
