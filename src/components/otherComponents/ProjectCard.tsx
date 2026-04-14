import { Github, ExternalLink, X } from "lucide-react";
import { type projectsDataTypes } from "../../data/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectCardProps = {
  project: projectsDataTypes;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer border border-white/10 rounded-lg bg-black hover:border-white/30 transition"
      >
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            loading="lazy"
            className="w-full h-52 md:h-60 object-cover transition duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-white text-base font-semibold uppercase tracking-wide">
            {project.title}
          </h3>
        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // ✅ outside click
          >
            {/* MODAL BOX */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-black border border-white/20 rounded-xl w-full max-w-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()} // ✅ prevent inside click
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* IMAGE */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-56 md:h-64 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-white uppercase">
                  {project.title}
                </h2>

                <p className="text-sm text-white/80 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK (SCROLLABLE X) */}
                <div className="mt-4 overflow-x-auto no-scrollbar">
                  <div className="flex gap-2 min-w-max">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-md bg-white/10 text-white whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex justify-end gap-3 mt-6">
                  {project.github && (
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </button>
                  )}

                  {project.live && (
                    <button
                      onClick={() => window.open(project.live, "_blank")}
                      className="p-2 rounded-md bg-white text-black hover:bg-gray-200 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;