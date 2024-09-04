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
      <Icon
        key={item.name}
        className={` ${item.color}   `}
        title={item.name}
        size={40}
      />
      <h3 className="hidden text-lg font-semibold text-center ">{item.name}</h3>
    </>
  );
}
