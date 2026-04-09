import { Github, ExternalLink } from "lucide-react";
import { type projectsDataTypes } from "../../data/types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type projectPropType = {
  project: projectsDataTypes;
  index: number;
};

const ProjectCard = ({ project }: projectPropType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {/* IMAGE */}
      <div className="rounded-lg overflow-hidden relative">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="bg-white backdrop-blur-md text-black tracking-wide cursor-pointer px-3 py-2 mt-3 rounded-lg">
        {/* TITLE */} 
        <div className="w-full h-full rounded-2xl group transition py-2 flex justify-evenly items-center hover:scale-97 ease-in-out duration-200 bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3
            className="text-sm font-bold mt-4 josefin uppercase pb-2 text-center cursor-pointer transition"
          >
            {project.title}
          </h3>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="josefin mt-3">
                <p className="text-sm text-black tracking-wide">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black/70 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* ICONS */}
                <div className="flex mt-2 justify-end gap-2">
                  {project.github && (
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="p-2 rounded-full bg-green-700 border border-white/30 text-white hover:bg-green-800 hover:scale-110 transition"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  )}

                  {project.live && (
                    <button
                      onClick={() => window.open(project.live, "_blank")}
                      className="p-2 rounded-full bg-linear-to-r from-purple-600 to-indigo-500 text-white hover:scale-110 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCard;