import Banner from "@/components/Banner/Banner";
import PagesHeader from "@/components/PagesHeader/PagesHeader";

const myExperience = [
  {
    id: 1,
    title: "MongoDB",
    description:
      "My work with MongoDB includes designing flexible, scalable databases and implementing efficient data models. I’ve tackled complex queries and ensured high performance in a NoSQL environment.",
  },
  {
    id: 2,
    title: "Express.js",
    description:
      "With Express.js, I’ve built robust and scalable server-side applications. My expertise includes creating RESTful APIs, managing middleware, and integrating various authentication mechanisms for secure and efficient endpoint handling.",
  },
  {
    id: 3,
    title: "React",
    description:
      "React is where I truly shine. I've developed interactive, high-performance front-end applications, utilizing hooks, context, and advanced state management techniques. My passion for React extends to working with libraries like Framer Motion and Redux to create seamless and dynamic user experiences.",
  },
  {
    id: 4,
    title: "Node.js",
    description:
      "My experience with Node.js involves crafting server-side logic and managing asynchronous operations. I’ve optimized applications for high traffic and integrated with external APIs to enhance functionality.",
  },
];

export default function MyJourneyPage() {
  return (
    <>
      <PagesHeader description="Hi, I’m Adonay D´agosto: Junior Software developer , amateur cook & Skater, guitarist, tinkerer, and general curious person_" />
      <Banner title=" My Experience with the MERN Stack" />
      <div className=" w-fit grid place-content-center p-10 text-content text-2xl">
        <div>
          <h3 className="text-2xl font-bold text-center my-12">
            Gained Knowledge and Focus
          </h3>
          <p className="">
            My journey into frontend development was fueled by a deep passion
            for creativity and problem-solving. From the moment I built my first
            simple webpage, I was captivated by the ability to bring ideas to
            life on the screen. The blend of design and functionality in
            frontend development allows me to express creativity while tackling
            complex challenges, which is something that has always driven me.
          </p>
          <p className=" mt-4">
            As I delved deeper into the world of web development, I became
            particularly fascinated by how frontend technologies like HTML, CSS,
            and JavaScript can be combined to create interactive, user-friendly
            experiences. This led me to explore more advanced tools and
            frameworks, such as React and TypeScript, which opened up new
            possibilities for building dynamic and scalable web applications.
          </p>
          <p className=" mt-4">
            My motivation grew stronger as I realized the impact that a
            well-crafted user interface can have on the overall user experience.
            I love the challenge of creating responsive designs that look and
            perform well across all devices. The satisfaction of seeing a
            beautifully designed, functional application in the hands of users
            is incredibly rewarding.
          </p>
        </div>
        <div className="p-6 ">
          <p className="text-lg mb-4">
            Over the years, I have immersed myself in the MERN stack—MongoDB,
            Express.js, React, and Node.js. Here's a snapshot of my experience
            with each technology:
          </p>
          <div className="space-y-6">
            {myExperience.map((item) => (
              <div className="border-l-4 border-decorator pl-4" key={item.id}>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
