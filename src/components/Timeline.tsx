import type { ResumeContent } from "@/interfaces";

const Timeline = ({ contents }: { contents: ResumeContent[] }) => {
  return (
    <div className="max-w-150">
      <ul>
        {contents.map((content: ResumeContent, index: number) => (
          <li key={index} className="relative flex gap-10 pb-5 items-baseline">
            <div
              className={
                index === contents.length - 1
                  ? ""
                  : "before:absolute before:left-[5.3px] before:top-[10px] before:h-full before:w-[2px] before:bg-[var(--primary-ctc)]"
              }
            >
              <svg
                className="w-3 h-3 text-[var(--text-ctc)]"
                viewBox="0 0 448 448"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="224" cy="224" r="192" />
              </svg>
            </div>

            <div className="text-sm text-[var(--text-muted)]">
              <p className="text-lg font-bold text-[var(--text-ctc)] tracking-wide">
                {content.title}
              </p>

              {content.course && (
                <p className="text-md font-medium text-[var(--text-muted)] italic leading-7 tracking-wide">
                  {content.course}
                </p>
              )}

              <p className="text-xs font-medium text-[var(--text-muted)] italic">
                {content.date}
              </p>

              {content.details && (
                <p className="text-md font-medium text-[var(--text-muted)] tracking-wide leading-6 mt-2">
                  {content.details}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
