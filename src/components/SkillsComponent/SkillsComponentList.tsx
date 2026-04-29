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
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
];

export default function SkillsComponentList({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-20 w-full", className)}>
      {skills.map((category) => (
        <section
          key={category.title}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/5 pb-12 last:border-0"
        >
          {/* Section Label: Pushed to the side like a sidebar */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-decorator">
              {category.title}
            </h4>
          </div>

          {/* Icons Grid: Breathable and structured */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-start">
              {category.items.map((item) => (
                <SkillsItem key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
