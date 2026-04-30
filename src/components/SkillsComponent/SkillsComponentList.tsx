import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaWordpress,
} from "react-icons/fa";
import {
  SiVite,
  SiDjango,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoGoLang } from "react-icons/bi";
import { cn } from "@/utils/cn";
import SkillsItem from "../SkillsItem/SkillsItem";

const skills = [
  {
    title: "Core Technologies_",
    items: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: FaPython, color: "#F7DF1E" },
      { name: "Go", icon: BiLogoGoLang, color: "#00ADD8" },
    ],
  },
  {
    title: "Frameworks & tools_ ",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "WordPress", icon: FaWordpress, color: "text-cyan-800" },
    ],
  },
  {
    title: "Environment & Data_",
    items: [
      { name: "GitHub", icon: FaGithub, color: "#11111" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "MongoDB", icon: DiMongodb, color: "#47A248" },
      { name: "Postgress", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
];

export default function SkillsComponentList({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-24 w-full", className)}>
      {skills.map((category) => (
        <section
          key={category.title}
          /* items-stretch ensures the border-b spans the full container width */
          className="flex flex-col items-stretch border-b border-white/10 pb-16 last:border-0"
        >
          {/* Category Title: Left-aligned looks more high-end with items-stretch */}
          <div className="mb-10">
            <h3 className="text-small font-bold uppercase tracking-[0.3em] text-decorator/90">
              {category.title}
            </h3>
          </div>

          {/* Icons Grid: Balanced spacing for the stretched container */}
          <div className="grid grid-cols-2 sm:grid-cols-3  gap-x-4 gap-y-12 justify-items-center">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center group"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <SkillsItem item={item} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
