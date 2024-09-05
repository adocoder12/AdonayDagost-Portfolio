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
        <Icon
          key={item.name}
          className={` ${item.color}   `}
          title={item.name}
          size={40}
        />
        <p className=" text-sm font-ligth text-center ">{item.name}</p>
      </div>
    </>
  );
}
