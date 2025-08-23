import Cards from "@/components/Cards";
import { projects } from "@/constants";
import type { CardsProps } from "@/interfaces";

const Projects = () => {
  return (
    <div className="w-full h-fit py-4 px-8 max-sm:py-0 max-sm:px-0">
      {/* Project Cards */}
      <div className="grid 2xl:grid-cols-3 grid-cols-2 max-lg:grid-cols-1 h-full gap-4">
        {projects.map((project: CardsProps, index: number) => (
          <Cards
            key={index}
            data={project}
            footer={true}
            titleIcon={false}
            clamp
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
