import { aboutCards } from "@/constants";
import type { AboutCards } from "@/interfaces";

const Cards = () => {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 w-full h-fit">
      {aboutCards.map((card: AboutCards, index: number) => (
        <div
          key={index}
          className="h-full flex justify-start gap-5 rounded-md p-5 bg-[var(--bg-component)]"
        >
          <span className="w-auto h-full">
            <card.icon className="text-3xl font-bold text-[var(--text-ctc)]" />
          </span>

          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl text-[var(--text-ctc)] leading-6 tracking-wide">
              {card.title}
            </h1>
            <p className="font-medium text-md leading-6 tracking-wide">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
