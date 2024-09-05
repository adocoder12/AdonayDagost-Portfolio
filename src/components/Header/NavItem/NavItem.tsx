import { NavLink } from "react-router-dom";

type NavItemProps = {
  name: string;
  link: string;
  setToggleMenu?: (toggle: boolean) => void;
  isActive?: boolean;
};

export default function NavItem({
  isActive,
  name,
  link,
  setToggleMenu,
}: NavItemProps) {
  return (
    <NavLink
      rel="noopener noreferrer"
      className={`relative group text-lg ${isActive ? "active" : ""}`}
      to={link}
      onClick={() => {
        if (setToggleMenu) {
          setToggleMenu(false);
        }
      }}
    >
      {name}
      <span
        className={`absolute -bottom-2 left-0 w-0 h-[3px] text-clip bg-decorator transition-all group-hover:w-full`}
      ></span>
    </NavLink>
  );
}
