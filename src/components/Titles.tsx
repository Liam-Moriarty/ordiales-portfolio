const Titles = ({ label }: { label: string }) => {
  return (
    <h1 className="font-bold text-2xl text-[var(--text-ctc)] capitalize tracking-wider">
      {label}
    </h1>
  );
};

export default Titles;
