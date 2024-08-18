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
            My knowledge of the MERN stack has been honed through a combination
            of practical projects and rigorous coursework. I’ve taken part in
            various courses that provided a solid foundation and advanced
            insights into these technologies. Additionally, hands-on experience
            with real-world projects has allowed me to apply and refine my
            skills.
          </p>
          <p className=" mt-4">
            While I have a comprehensive understanding of the entire MERN stack,
            I’ve particularly focused on front-end development with React. I’m
            passionate about leveraging React and its ecosystem, including
            libraries like Redux for state management and Framer Motion for
            animations, to build engaging and responsive user interfaces.
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
