const About = () => {
  return (
    <div className="w-full h-[1000px] px-8 flex flex-col">
      <div className="w-full h-fit flex flex-col gap-5">
        <h1 className="font-bold text-2xl text-[var(--text-ctc)] capitalize tracking-wider">
          About Me
        </h1>

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
    </div>
  );
};

export default About;
