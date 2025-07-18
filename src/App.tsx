// import { BrowserRouter, Routes, Route } from "react-router";

import { Sidebar, Board } from "./layouts";

const App = () => {
  return (
    <main className="w-full h-screen flex justify-center gap-5 py-10 px-5">
      <Sidebar />
      <Board />
    </main>
  );
};

export default App;
