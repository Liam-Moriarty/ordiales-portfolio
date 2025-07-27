import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

const Board = () => {
  return (
    <div
      className="relative w-full h-full bg-[var(--bg-muted)] rounded-xl
      max-md:h-[1000px] max-md:rounded-none max-md:py-18 max-md:px-5 overflow-y-scroll hide-scrollbar"
    >
      <Navbar />

      {/* all child will render here */}
      <Outlet />
    </div>
  );
};

export default Board;
