import type { CardsProps } from "@/interfaces";
import defaultImage from "../assets/anti-social.png";
import Button from "./Button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router";

interface Props {
  data: CardsProps;
  footer: boolean;
  titleIcon: boolean;
  clamp?: boolean;
}

const Cards = ({ data, footer, titleIcon, clamp }: Props) => {
  return (
    <div className="h-full flex flex-col gap-2 rounded-md p-5 bg-[var(--bg-component)]">
      {/* Header */}
      <div className="w-full h-fit flex justify-start items-center gap-5">
        {titleIcon && data.icon && (
          <data.icon className="text-3xl font-bold text-[var(--text-ctc)]" />
        )}

        <h1 className="font-bold text-lg text-[var(--text-ctc)] line-clamp-1 leading-6 tracking-wide px-2.5">
          {data.title}
        </h1>
      </div>

      {/* Body */}
      <div className="w-full h-full flex flex-col gap-2">
        {data.image && (
          <div className="w-full max-h-40 h-fit">
            <img
              src={data.image ? data.image[0] : defaultImage}
              alt="project image"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <p
          className={`font-medium text-md leading-6 tracking-wide px-2 ${
            clamp ? "line-clamp-3" : null
          }`}
        >
          {data.description}
        </p>
      </div>

      {/* Footer */}
      {footer && (
        <div className="flex justify-end items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button label="View More" variant="primary" />
            </DialogTrigger>

            <DialogContent className="bg-[var(--bg-component)] border-hidden outline-0">
              <DialogHeader>
                <DialogTitle className="text-[var(--text-ctc)] font-bold ">
                  {data.title}
                </DialogTitle>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[250px]">
                  <div className="row-span-2 w-full h-full bg-transparent p-2 border-2 rounded-md border-slate-600 shadow-xl">
                    <img
                      src={data.image ? data.image[0] : defaultImage}
                      alt="project image"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className=" w-full h-full bg-transparent p-2 border-2 rounded-md border-slate-600 shadow-xl">
                    <img
                      src={data.image ? data.image[1] : defaultImage}
                      alt="project image"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className=" w-full h-full bg-transparent p-2 border-2 rounded-md border-slate-600 shadow-xl">
                    <img
                      src={data.image ? data.image[2] : defaultImage}
                      alt="project image"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <DialogDescription>
                  <span className="flex flex-col mb-5">
                    <span className="font-bold text-md text-[var(--text-ctc)]">
                      Description
                    </span>
                    <span className="text-[var(--text-default)] text-sm font-medium">
                      {data.description}
                    </span>
                  </span>

                  <span className="flex flex-col mb-5">
                    <span className="font-bold text-md text-[var(--text-ctc)]">
                      Link
                    </span>
                    {data.link ? (
                      <Link
                        to={data.link}
                        className="text-blue-500 text-sm font-medium italic"
                        // this onClick is used to open the links in another tab
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(
                            data.link,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      >
                        {data.link}
                      </Link>
                    ) : (
                      <span className="text-[var(--text-default)] text-sm font-medium">
                        Not Deployed Yet Coming Soon...
                      </span>
                    )}
                  </span>

                  <span className="flex flex-col mb-5">
                    <span className="font-bold text-md text-[var(--text-ctc)] mb-1">
                      Tech Stack
                    </span>

                    <span className="flex justify-center items-center gap-3 w-fit h-auto">
                      {data.techStack
                        ? data.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="w-10 h-10 rounded-md py-2 px-1 bg-[var(--bg-muted)]"
                            >
                              <img
                                src={tech}
                                alt="tech stack image"
                                className="object-contain w-full h-full"
                              />
                            </span>
                          ))
                        : null}
                    </span>
                  </span>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default Cards;
