import type { Contacts, Links, MenuBarProps, Socials } from "@/interfaces";
import { LuMenu, LuX } from "react-icons/lu";
import profile from "../assets/grad-pic.png";
import { contacts, links, socials } from "@/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Link, NavLink } from "react-router";
import { LuCircleAlert } from "react-icons/lu";
import { useEffect, useRef } from "react";

const MenuBar = ({ isOpen, setIsOpen }: MenuBarProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {isOpen ? (
        <LuX
          className="text-2xl fixed top-4 left-5 z-50"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <LuMenu
          className="text-2xl fixed top-4 left-5 z-50"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      <div
        ref={menuRef}
        className={`${isOpen ? "block" : "hidden"} fixed top-0 left-0 z-40
        bg-[var(--bg-component)] w-[300px] flex flex-col items-start h-full pt-14 py-5 px-5 gap-3`}
      >
        {/* profile & contacts*/}
        <div className="w-full h-fit flex flex-col gap-5">
          {/* profile */}
          <div className="w-full flex items-center justify-start gap-3 h-fit">
            <div className="w-[4rem] h-[4rem]">
              <img
                src={profile}
                alt="my profile picture"
                className="w-full h-full rounded-lg object-cover opacity-70"
              />
            </div>

            <div className="flex-1 h-fit flex flex-col">
              <h2 className="font-semibold text-lg tracking-tight text-center">
                Fernando Ordiales
              </h2>
              <p
                className="font-semibold text-xs tracking-tight py-1.5 px-3 bg-[var(--bg-muted)] 
                rounded-lg text-center"
              >
                Future Software Developer
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-3">
            {contacts.map((contact: Contacts, index: number) => (
              <Tooltip key={index}>
                <TooltipTrigger className="w-full h-auto flex justify-start items-center gap-2">
                  <span className="rounded-lg py-2 px-2.5 bg-[var(--bg-muted)]">
                    <contact.icon className="text-xl text-[var(--primary-ctc)]" />
                  </span>

                  <div className="text-sm font-bold tracking-tight flex flex-col items-start leading-3.5 cursor-default">
                    <h3 className="text-sm font-semibold tracking-wide text-[var(--text-ctc)]">
                      {contact.label}
                    </h3>
                    <p
                      className="line-clamp-1 break-all text-xs font-semibold tracking-wide 
                    text-[var(--text-default)]"
                    >
                      {contact.content}
                    </p>
                  </div>
                </TooltipTrigger>

                {contact.tooltip ? (
                  <TooltipContent
                    className="bg-[var(--bg-component)]"
                    side="bottom"
                  >
                    {contact.content}
                  </TooltipContent>
                ) : null}
              </Tooltip>
            ))}
          </div>
        </div>

        {/* navigation links */}
        <div className="w-full h-full flex flex-col gap-2 mt-10">
          <p className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">
            Explore more...
          </p>

          {links.map((link: Links, index: number) => (
            <div key={index} className="flex justify-start items-center gap-2">
              <span className="rounded-lg py-2 px-2.5 bg-[var(--bg-muted)]">
                {link.icon ? (
                  <link.icon className="text-xl text-[var(--primary-ctc)]" />
                ) : (
                  <LuCircleAlert className="text-xl text-[var(--primary-ctc)]" />
                )}
              </span>
              <NavLink
                to={link.path}
                className="text-sm font-bold tracking-wide"
              >
                {link.label}
              </NavLink>
            </div>
          ))}
        </div>

        <p className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">
          Check my socials...
        </p>

        {/* socials */}
        <div className="w-full h-fit flex justify-center items-center gap-3">
          {socials.map((social: Socials, index: number) => (
            <div
              key={index}
              className="rounded-md py-2.5 px-2 bg-[var(--bg-muted)]"
            >
              <Link to={social.to}>
                <social.icon className="text-md text-[var(--text-ctc)]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuBar;
