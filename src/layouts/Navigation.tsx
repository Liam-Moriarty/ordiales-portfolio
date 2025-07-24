import { useState } from "react";
import MenuBar from "../components/MenuBar";
import Sidebar from "../components/Sidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery("(max-width: 47.999rem)");

  return (
    <>
      {isTablet ? (
        <MenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <Sidebar />
      )}
    </>
  );
};

export default Navigation;
