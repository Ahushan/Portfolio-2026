import ProjectCard from "../../components/otherComponents/ProjectCard";
import { projectsData } from "../../data/Constant";

const Projects = () => {
  //  bg-gradient-to-b from-gray-900 via-gray-900 to-black
  return (
    <div
      className="h-fit p-5! flex bg-transparent  flex-col gap-4 mx-auto overflow-hidden"
      id="Projects"
    >
      <h1 className="text-[30px] w-fit pb-5! oswald  text-white font-extrabold text-balance">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
