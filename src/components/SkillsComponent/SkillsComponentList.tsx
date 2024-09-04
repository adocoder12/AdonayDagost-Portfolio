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
import { SiVitess, SiDjango } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

//utils
// import { IconType } from "react-icons";
import { cn } from "@utils/cn";

type TskillsList = {
  className?: string;
};

//components
import SkillsItem from "../SkillsItem/SkillsItem";

const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Python", icon: FaPython, color: "text-yellow-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-red-600" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
      { name: "WordPress", icon: FaWordpress, color: "text-blue-800" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      { name: "React", icon: FaReact, color: "text-cyan-500" },
      { name: "Django", icon: SiDjango, color: "text-green-500" },
      { name: "ViteJS", icon: SiVitess, color: "text-blue-500" },
      { name: "Mongodb", icon: DiMongodb, color: "text-green-600" },
    ],
  },
];

export default function SkillsComponentList({ className }: TskillsList) {
  return (
    <>
      <div
        className={cn(
          "grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ",
          className
        )}
      >
        {skills.map((skill) => (
          // title and icon wrapper
          <div
            className=" flex flex-col items-center justify-center gap-y-8 p-4 lg:gap-x-4  text-content  md:last:col-span-full  lg:last:col-auto"
            key={skill.title}
          >
            <h4 className="text-lg font-semibold ">{skill.title}</h4>

            {/* // skill items */}
            <div className=" grid grid-cols-2 w-40 grid-flow-row-dense   gap-y-8 items-center   md:gap-x-2 md:gap-y-8 ">
              {skill.items.map((item) => {
                return <SkillsItem item={item} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
