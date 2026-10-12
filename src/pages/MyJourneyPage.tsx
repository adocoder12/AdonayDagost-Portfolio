import { Helmet } from "react-helmet-async";

// components
import PagesHeader from "@/components/PagesHeader/PagesHeader";

const paragraphClass =
  "text-base leading-loose md:text-lg md:leading-loose lg:text-xl lg:leading-loose font-light text-justify md:text-left";

const milestones = [
  {
    title: "Custom Websites",
    meta: "jonia.fi & Kinuski Studio / 2026",
    points: [
      "Custom WordPress themes with Roots Sage, built solo from design to launch.",
      "Hosting setup, email configuration and ongoing security maintenance.",
    ],
  },
  {
    title: "Go Backend Development",
    meta: "Independent Projects / 2026",
    points: [
      "REST API for apartment management with Gin, PostgreSQL and role-based access.",
      "Server-rendered app with sessions, auth middleware and bcrypt on Go's standard library.",
    ],
  },
  {
    title: "Laravel & Inertia.js Course",
    meta: "Udemy / 2025",
    points: [
      "Laravel and PHP backend architecture.",
      "Connecting Laravel to a React frontend with Inertia.js.",
    ],
  },
  {
    title: "Web Development Studies",
    meta: "Omnia / 2023–2024",
    points: [
      "Backend development with PHP, SQL and Python.",
      "Frontend development with TypeScript and React.",
    ],
  },
  {
    title: "Datanomi, Vocational Qualification in ICT",
    meta: "Tieto- ja viestintätekniikan perustutkinto · Savon Ammattiopisto / 2019–2022",
    points: [
      "Programming fundamentals and object-oriented design.",
      "Databases, networking and hands-on IT support.",
      "C# and web development with HTML, CSS and JavaScript.",
    ],
  },
];

export default function MyJourneyPage() {
  return (
    <>
      <Helmet>
        <title>Adonay D'agosto | My Journey</title>
        <meta
          name="description"
          content="Adonay D'agosto is a full-stack developer in Helsinki working with React, TypeScript, Go and WordPress."
        />
      </Helmet>

      <PagesHeader
        secondaryTitle="Hi, I'm Adonay D'agosto"
        description="A full-stack developer in Helsinki, building with React, Go and WordPress."
      />

      <div className="container-sized">
        <div className="flex flex-col gap-y-8 py-6 text-content mb-8">
          <p className={paragraphClass}>
            I started on the frontend with React, TypeScript and Tailwind, and I
            still enjoy the moment when a design turns into something people can
            actually use. Over time I wanted to understand what happens behind
            the screen, so I moved down the stack. Today I write REST APIs in Go
            with PostgreSQL and build custom WordPress themes with Roots Sage
            for clients.
          </p>

          <p className={paragraphClass}>
            What I like most is taking a problem that looks messy and getting it
            down to simple code the next person can read and change without
            guessing. I work in Spanish, English and Finnish, and I'm open to
            developer roles where I can keep growing on both sides of the stack.
          </p>

          <p className={paragraphClass}>
            Away from the keyboard I skate, play guitar and play football with
            friends.
          </p>
        </div>
      </div>

      <div className="container-sized pb-20">
        <h3 className="text-2xl font-semibold mb-8 border-b pb-2">
          Technical Milestones
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((m) => (
            <div key={m.title}>
              <h4 className="font-bold text-lg">{m.title}</h4>
              <p className="text-sm opacity-80">{m.meta}</p>
              <ul className="mt-2 list-disc list-inside text-sm font-light leading-relaxed">
                {m.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
