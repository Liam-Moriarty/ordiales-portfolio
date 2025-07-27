import Timeline from "@/components/Timeline";
import Titles from "@/components/Titles";

const Resume = () => {
  return (
    <div className="w-full h-fit py-4 px-8 max-sm:py-0 max-sm:px-0 flex flex-col gap-5">
      {/* Work Experience */}
      <div className="w-full h-fit flex flex-col gap-5">
        <Titles label="Work Experience" />

        <Timeline />
      </div>

      {/* Educational Background */}
      {/* <div className="w-full h-fit flex flex-col gap-5">
        <Titles label="Educational Background" />
      </div> */}
    </div>
  );
};

export default Resume;
