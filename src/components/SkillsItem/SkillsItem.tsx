import { IconType } from "react-icons";

type TSkills = {
  name: string;
  color: string;
  icon: IconType;
};

export default function SkillsItem({ item }: { item: TSkills }) {
  const Icon = item.icon;
  return (
    <>
      <div className="flex flex-col items-center gap-y-3">
        <button className="relative group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-700 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500  hover:${item.color} ">
          <Icon
            key={item.name}
            color={`${item.color}`}
            className={` ${item.color} `}
            title={item.name}
            size={30}
          />
          <span className=" absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
            {item.name}
          </span>
        </button>
      </div>
    </>
  );
}
