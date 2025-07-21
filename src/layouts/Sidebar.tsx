import { contacts, links } from "../constants";
import profile from "../assets/anti-social.png";
import type { Contacts, Links } from "../interfaces";
import { Link } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  return (
    <div className="max-w-[280px] w-full h-full bg-[var(--bg-muted)] rounded-xl py-4 px-6 flex flex-col justify-between">
      {/* Profile */}
      <div className=" py-4 px-2 flex flex-col gap-5 items-center h-fit">
        <div className="w-[6rem] h-[6rem]">
          <img
            src={profile}
            alt="my profile picture"
            className="w-full h-full rounded-lg object-cover opacity-70"
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold text-lg tracking-tight">
            Fernando Ordiales
          </h2>
          <p className="font-semibold text-xs tracking-tight py-1.5 px-4 bg-[var(--bg-component)] rounded-lg text-center">
            Future Software Developer
          </p>
        </div>
      </div>

      {/* Contacts Links */}
      <div className="py-2 px-4 flex flex-col items-center w-full h-full overflow-hidden gap-8">
        {contacts.map((contact: Contacts, index: number) => (
          <Tooltip key={index}>
            <TooltipTrigger className="flex justify-start items-center w-full h-auto gap-5">
              <span className="rounded-lg py-2 px-3 bg-[var(--bg-component)]">
                <contact.icon className="text-xl text-[var(--primary-ctc)]" />
              </span>{" "}
              <div className="text-sm font-bold tracking-tight flex flex-col items-start cursor-default">
                <h3 className="text-md font-bold tracking-wide text-[var(--text-ctc)]">
                  {contact.label}
                </h3>
                <p className="line-clamp-1 break-all font-semibold tracking-tight text-[var(--text-muted)]">
                  {contact.content}
                </p>
              </div>
            </TooltipTrigger>

            {contact.tooltip ? (
              <TooltipContent
                className="bg-[var(--bg-component)]"
                side="bottom"
              >
                <p>{contact.content}</p>
              </TooltipContent>
            ) : null}
          </Tooltip>
        ))}
      </div>

      {/* Social Links */}
      <div className=" py-2 px-4 flex justify-center items-center gap-3 h-fit">
        {links.map((link: Links, index: number) => (
          <Tooltip key={index}>
            <TooltipTrigger className="rounded-md py-2.5 px-2 bg-[var(--bg-component)]">
              <Link
                to={link.to}
                key={index}
                // this onClick is used to open the links in another tab
                onClick={(e) => {
                  e.preventDefault();
                  window.open(link.to, "_blank", "noopener,noreferrer");
                }}
              >
                <link.icon className="text-md text-[var(--text-ctc)]" />
              </Link>
            </TooltipTrigger>

            <TooltipContent className="bg-[var(--bg-component)]" side="bottom">
              <p>{link.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
