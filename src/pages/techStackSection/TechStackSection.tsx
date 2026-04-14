import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TechStackCard from "../../components/otherComponents/TechStackCard";
import { type TechStackDataTypes } from "../../data/types";

type TechStackSectionProps = {
  TechStackData: TechStackDataTypes[];
};

function TechStackSection({ TechStackData }: TechStackSectionProps) {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative z-10 overflow-hidden bg-transparent p-5"
    >
      <div className="w-full mx-auto">

        {/* Heading */}
        <h1 className="
          text-3xl md:text-4xl lg:text-5xl 
          uppercase font-extrabold tracking-wide whitespace-nowrap
          bg-linear-to-r from-gray-700 via-white to-gray-700
          bg-clip-text text-transparent shimmer-text
        ">
          Tech Stack
        </h1>

        {/* GRID WRAPPER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-6 w-full"
        >
          <div className="grid gap-5 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {TechStackData.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <TechStackCard
                  skill={skill}
                  index={index}
                  isInView={isInView}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default TechStackSection;