import { Routes, Route } from "react-router";
import { Board } from "./layouts";
import Navigation from "./layouts/Navigation";
import { About, CantFindPage, Contacts, Home, Projects, Resume } from "./pages";

const App = () => {
  return (
    <main className="relative w-full h-screen flex justify-center gap-5 py-10 px-5 max-md:py-0 max-md:px-0">
      <Navigation />

      <Routes>
        {/* all the routes inside of this Route will render in Board component */}
        <Route path="/" element={<Board />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<CantFindPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
