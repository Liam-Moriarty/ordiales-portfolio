const Timeline = () => {
  return (
    <div className="w-90">
      <ul>
        <li className="relative flex gap-10 pb-5 items-baseline">
          <div className="before:absolute before:left-[5.3px] before:top-[10px] before:h-full before:w-[2px] before:bg-[var(--primary-ctc)]">
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
            <p className="text-lg font-bold text-[var(--text-ctc)]">
              Frontend Developer Intern
            </p>
            <ul className="mt-2 list-disc">
              <li className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, culpa omnis cupiditate a quibusdam exercitationem
                aspernatur impedit, id quisquam voluptatibus iste error aperiam,
                fugit perspiciatis nostrum. Eveniet doloribus deserunt facere.
              </li>
              <li className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing Provident,
                culpa omnis cupiditate a quibusdam exercitationem
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
