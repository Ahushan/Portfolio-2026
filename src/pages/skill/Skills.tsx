import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillsBar from "../../components/otherComponents/SkillArt";
import { type skillsDataTypes } from "../../data/types";


type skillsDataPropTypes = {
  skillsData: skillsDataTypes[];
};
function Skills({ skillsData }: skillsDataPropTypes) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      ref={ref}
      className="overflow-hidden bg-transparent p-5 z-10" id="Tech-Stack"
    > 
      <div className="max-w-6xl! bg-transparent mx-auto!">
        <h1
          className="
          text-5xl md:text-7xl lg:text-8xl uppercase 
          font-extrabold tracking-wide text-nowrap

          bg-linear-to-r from-gray-700 via-white to-gray-700
          bg-clip-text text-transparent

          shimmer-text
          "
        >
          Tech Stacks
        </h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className=" font-bold mb-6!"
        ></motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {skillsData.map((skill, index) => (
            <SkillsBar
              key={`${skill.name}-${index}`}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
          
      </div>
    </section>
  );
}

export default Skills;
