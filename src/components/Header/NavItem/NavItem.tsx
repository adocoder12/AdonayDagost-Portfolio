import { NavLink } from "react-router-dom";
type NavItemProps = {
  name: string;
  link: string;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isActive?: boolean;
};

export default function NavItem({
  isActive,
  name,
  link,
  setToggleMenu,
}: NavItemProps) {
  return (
    <>
      <NavLink
        className={` ${
          isActive ? "active" : ""
        } relative group text-lg  group `}
        to={link}
        onClick={() => setToggleMenu(false)}
      >
        {name}
        <span
          className={`absolute -bottom-2 left-0 w-0 h-[3px] text-clip bg-decorator transition-all group-hover:w-full group-visited:w-full} `}
        ></span>
      </NavLink>
    </>
  );
}
