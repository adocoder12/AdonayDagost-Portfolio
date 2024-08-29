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
      <div className="p-6 ">
        <h2 className="text-2xl font-bold mb-4">Skills_</h2>
        <div className=" grid grid-cols-1 gap-y-4 md:gap-x-4 md:grid-cols-3   ">
          {skills.map((skill) => (
            <div
              className="bg-gray-100 p-4 rounded-lg shadow-md "
              key={skill.title}
            >
              <div className="flex items-center mb-4">
                <h4 className="text-lg font-semibold text-center text-slate-600">
                  {skill.title}
                </h4>
              </div>
              <p className="flex flex-wrap items-center justify-around text-gray-700 ">
                {skill.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="grid grid-cols-1 place-items-center gap-y-2 hover:scale-125 ">
                      <Icon
                        key={item.name}
                        className={` ${item.color}  `}
                        title={item.name}
                        size={40}
                      />
                      <h3 className="text-lg font-semibold text-center text-slate-600 ">
                        {item.name}
                      </h3>
                    </div>
                  );
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
