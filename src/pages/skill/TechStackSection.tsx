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
    margin: "-100px",
  });

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative z-10 overflow-hidden bg-transparent p-5"
    >
      <div className="">
        
        {/* Heading */}
        <h1
          className="
          text-3xl md:text-4xl lg:text-5xl 
          uppercase font-extrabold tracking-wide whitespace-nowrap
          bg-linear-to-r from-gray-700 via-white to-gray-700
          bg-clip-text text-transparent shimmer-text
          "
        >
          Tech Stack
        </h1>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="mt-6 w-full"
        >
          <div className="grid gap-5 w-full md:grid-cols-2 lg:grid-cols-4">
            {TechStackData.map((skill, index) => (
              <TechStackCard
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStackSection;