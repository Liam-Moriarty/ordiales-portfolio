import Titles from "@/components/Titles";
import Cards from "@/components/Cards";

const About = () => {
  return (
    <div className="w-full h-fit py-4 px-8 max-sm:py-0 max-sm:px-0 flex flex-col gap-5">
      {/* Header */}
      <div className="w-full h-fit flex flex-col gap-5">
        <Titles label="About Me" />

        <p className="font-medium text-md tracking-wide leading-7">
          &emsp;&emsp;&emsp;Motivated and detail-oriented developer with a
          strong foundation in full-stack web development and data analysis.
          Proficient in building responsive, user-friendly interfaces and robust
          backend systems using modern technologies like React, Vue, TypeScript,
          JavaScript, Java, MongoDB, and MySQL. Adept at translating business
          needs into technical solutions, analyzing data for actionable
          insights, and delivering high-quality code in collaborative
          environments. Eager to contribute to innovative teams and continuously
          grow in both development and data-driven roles.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full h-fit flex flex-col gap-5">
        <Titles label="What I'm Doing" />

        <Cards />
      </div>
    </div>
  );
};

export default About;
