import ProjectCard from "../../components/otherComponents/ProjectCard";
import { projectsData } from "../../data/Constant";

const Projects = () => {
  return (
    <div
      className="h-fit p-5 flex bg-transparent  flex-col gap-4 mx-auto overflow-hidden"
      id="Projects"
    >
      <h1
        className="
          text-3xl md:text-4xl lg:text-5xl uppercase 
          font-extrabold tracking-wide text-nowrap

          bg-linear-to-r from-gray-700 via-white to-gray-700
          bg-clip-text text-transparent

          shimmer-text
          "
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
