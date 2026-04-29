import { IconType } from "react-icons";
import { cn } from "@/utils/cn";

type TSkills = {
  name: string;
  color: string;
  icon: IconType;
};

export default function SkillsItem({ item }: { item: TSkills }) {
  const Icon = item.icon;

  return (
    <div className="flex flex-col items-center group">
      <div
        className={cn(
          "relative flex items-center justify-center p-5 rounded-xl transition-all duration-500 ease-in-out",
          "bg-white/5 border border-white/10 backdrop-blur-sm",
          "hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:cursor-pointer",
        )}
      >
        {/* The Icon: Using the color prop for the brand color */}
        <Icon
          title={item.name}
          size={32}
          style={{ color: item.color }}
          className="transition-transform duration-500 group-hover:scale-110"
        />

        {/* Tooltip: Editorial Underscore Style */}
        <span
          className={cn(
            "absolute -bottom-8 opacity-0 transition-all duration-500",
            "text-[10px] font-black uppercase tracking-[0.2em] text-decorator",
            "group-hover:opacity-100 group-hover:-bottom-10",
          )}
        >
          {item.name}_
        </span>
      </div>
    </div>
  );
}
