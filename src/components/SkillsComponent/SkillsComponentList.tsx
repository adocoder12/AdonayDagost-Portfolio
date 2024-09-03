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

export default function SkillsComponentList() {
  return (
    <>
      <div className=" grid grid-cols-1 justify-around items-center gap-y-4 lg:gap-x-4 lg:grid-cols-3 text-content">
        {skills.map((skill) => (
          // title and icon wrapper
          <div className=" p-4 rounded-sm " key={skill.title}>
            <h4 className="text-lg font-semibold text-center  mb-8">
              {skill.title}
            </h4>

            {/* // skill items */}
            <div className=" grid grid-cols-2 grid-flow-row-dense justify-around items-start  md:items-center   md:gap-x-2 md:gap-y-8 ">
              {skill.items.map((item) => {
                // const Icon = item.icon;
                return <SkillsItem item={item} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
