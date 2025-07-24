import { links } from "@/constants";
import type { Links } from "@/interfaces";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="top-0 right-0 w-full py-4 px-6 flex justify-end items-center gap-3 max-md:hidden">
      {links.map((link: Links, index: number) => (
        <NavLink
          key={index}
          to={link.path}
          className="font-bold text-sm tracking-wide py-2 px-6 hover:bg-[var(--bg-default)] rounded-md"
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
