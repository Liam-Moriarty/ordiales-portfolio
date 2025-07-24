import { Outlet } from "react-router";

const Board = () => {
  return (
    <div className="w-full h-full max-md:h-[1000px] bg-[var(--bg-muted)] rounded-xl p-5 max-md:rounded-none max-md:py-18 max-md:px-5">
      {/* all child will render here */}
      <Outlet />
    </div>
  );
};

export default Board;
